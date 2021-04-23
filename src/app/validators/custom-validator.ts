import { APP_MESSAGE } from 'src/app/constants/app-constants';
import { FormControl } from '@angular/forms';
import {
  ErrorMesage,
  RangeOperation,
  Operator,
  CustomErrorType
} from './validation-model';
import { FormGroup } from '@angular/forms';

export class CustomValidator {
  static required = (customMessage?: string) => (
    control: FormControl
  ): ErrorMesage | null => {
    const value = control.value;
    if (value === null || value === undefined || value.length === 0) {
      return new ErrorMesage(
        CustomErrorType.REQUIRED,
        customMessage || APP_MESSAGE.VALIDATE.REQUIRED
      );
    } else if (typeof value === 'number') {
      return null;
    } else if (typeof value === 'string' && value.trim().length === 0) {
      return new ErrorMesage(
        CustomErrorType.REQUIRED,
        customMessage || APP_MESSAGE.VALIDATE.REQUIRED
      );
    } else {
      return null;
    }
  };

  static maxLength = (max: number, customMessage?: string) => (
    control: FormControl
  ): ErrorMesage | null => {
    if (`${control.value}`.length > max) {
      return new ErrorMesage(
        CustomErrorType.MAX_LENGTH,
        customMessage || APP_MESSAGE.VALIDATE.MAX_LENGTH(max)
      );
    } else {
      return null;
    }
  };

  static rangeValue = (min: number, max: number, customMessage?: string) => (
    control: FormControl
  ): ErrorMesage | null => {
    if (control.value !== null && !isNaN(control.value)) {
      const num = parseInt(control.value, 10);
      if (num < min || num > max) {
        return new ErrorMesage(
          CustomErrorType.RANGE,
          customMessage || APP_MESSAGE.VALIDATE.RANGE_VALUE(min, max)
        );
      }
      return null;
    } else {
      return null;
    }
  };

  static compare = (
    source: string,
    targetControlName: string,
    op: Operator,
    customMessage?: string
  ) => (form: FormGroup): any => {
    const sourceVal = parseFloat(form.value[source]);
    const targetVal = parseFloat(form.value[targetControlName]);
    const targetControl = form.controls[source];

    if (
      sourceVal !== null &&
      targetVal !== null &&
      !isNaN(sourceVal) &&
      !isNaN(targetVal)
    ) {
      let isValid = true;
      switch (op.key) {
        case RangeOperation.GT.key: {
          isValid = sourceVal > targetVal;
          break;
        }
        case RangeOperation.LT.key: {
          isValid = sourceVal < targetVal;
          break;
        }
      }

      if (isValid) {
        if (
          targetControl.errors &&
          targetControl.errors.type === CustomErrorType.COMPARE
        ) {
          targetControl.setErrors(null);
          targetControl.updateValueAndValidity();
        }
        return form.errors;
      } else {
        targetControl.setErrors(
          new ErrorMesage(
            CustomErrorType.COMPARE,
            customMessage ||
              APP_MESSAGE.VALIDATE.COMPARE_WITH(op.display, targetVal)
          )
        );
        return form.errors;
      }
    } else {
      return form.errors;
    }
  };

  static email = (customMessage?: string) => (
    control: FormControl
  ): ErrorMesage | null => {
    const value = control.value;
    if (value === null) {
      return null;
    } else {
      if (`${value}`.match(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
        return null;
      } else {
        return new ErrorMesage(
          CustomErrorType.EMAIL,
          customMessage || APP_MESSAGE.VALIDATE.EMAIL_FORMAT
        );
      }
    }
  };

  static matchField = (
    targetFieldName: string, // target input value use to compare
    matchFieldName: string, // The value need to compare with target input value
    customMessage?: string
  ) => (formGroup: FormGroup): any => {
    const sourceControl = formGroup.controls[targetFieldName];
    const matchControl = formGroup.controls[matchFieldName];

    if (
      matchControl.errors &&
      matchControl.errors.type !== CustomErrorType.MATH_PASSWORD
    ) {
      // Error in another validator
      return;
    }

    if (sourceControl.value !== matchControl.value) {
      matchControl.setErrors(
        new ErrorMesage(
          CustomErrorType.MATH_PASSWORD,
          customMessage ||
            APP_MESSAGE.VALIDATE.MATCH_FIELD(matchFieldName, targetFieldName)
        )
      );
      return formGroup.errors;
    } else {
      matchControl.setErrors(null);
      sourceControl.setErrors(null);
      return formGroup.errors;
    }
  };
}

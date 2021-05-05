import { Component, OnInit } from '@angular/core';
import { SelectItem, PrimeNGConfig } from 'primeng/api';
import { Product } from './product';
import { ProductService } from './productservice';
import { SortEvent } from 'primeng/api';
import { PPCService } from 'src/app/services/apis/ppc.service';
import {
  PPCDetailModel,
  PPCItemModel,
  PPCStatusOption
} from 'src/app/models/ppc.model';
import { SpinnerService } from 'src/app/sharedComponent/spinner/spinner.service';
@Component({
  selector: 'app-list-ppc',
  templateUrl: './list-ppc.component.html',
  styleUrls: ['./list-ppc.component.scss']
})
export class ListPPCComponent implements OnInit {
  ppcOption: any[] = PPCStatusOption;
  selectedPPCId = '';
  searchKeyWord = '';
  ppcList: PPCItemModel[] = [];
  displayDetailPPC = false;
  rangeDates: any;

  ppcDetailData: PPCDetailModel = new PPCDetailModel({});
  constructor(
    private ppcService: PPCService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.handleGetListPPC();
  }

  showModal(id: string): void {
    this.displayDetailPPC = true;
    this.spinnerService.show();

    this.ppcService.getPPCDetail(id).subscribe(
      res => {
        this.ppcDetailData = res;
        this.spinnerService.hide();
      },
      error => {
        this.spinnerService.hide();
      }
    );
  }

  handleGetListPPC(): void {
    this.spinnerService.show();
    this.ppcService
      .getListPPC({
        end:
          (this.rangeDates &&
            this.getDateStringFromDateObject(this.rangeDates[1])) ||
          '',
        keyWord: this.searchKeyWord,
        start:
          (this.rangeDates &&
            this.getDateStringFromDateObject(this.rangeDates[0])) ||
          '',
        statusId: this.selectedPPCId || ''
      })
      .subscribe(
        res => {
          this.ppcList = res;
          this.spinnerService.hide();
        },
        error => {
          this.spinnerService.hide();
        }
      );
  }

  getDateStringFromDateObject(date: Date): string {
    const year = date.getFullYear();
    const month =
      date.getMonth() > 8
        ? `${date.getMonth() + 1}`
        : `0${date.getMonth() + 1}`;
    const day = date.getDate() > 9 ? `${date.getDate()}` : `0${date.getDate()}`;
    return `${year}-${month}-${day}`;
  }

  handleCheckValidate(): void {
    const {
      customerName,
      customerPhone,
      id,
      modelName,
      selloutDate,
      serialNumber
    } = this.ppcDetailData;
    const dataCheckValidate = {
      customer_name: customerName,
      customer_phone: customerPhone,
      id,
      model_name: modelName,
      sell_out_date: selloutDate,
      serial_number: serialNumber
    };

    this.spinnerService.show();

    this.ppcService.checkValidation(dataCheckValidate).subscribe(
      res => {
        this.ppcDetailData.validation = res;
        this.spinnerService.hide();
      },
      error => {
        this.spinnerService.hide();
      }
    );
  }

  handleUpdate(status: string): void {
    const {
      id,
      customerName,
      customerPhone,
      modelName,
      selloutDate,
      serialNumber,
      note,
      validation
    } = this.ppcDetailData;
    const dataCheckValidate = {
      id,
      customer_name: customerName,
      customer_phone: customerPhone,
      model_name: modelName,
      note,
      sell_out_date: selloutDate,
      serial_number: serialNumber,
      status,
      validation
    };

    this.spinnerService.show();

    this.ppcService.updatePPC(dataCheckValidate).subscribe(
      res => {
        this.spinnerService.hide();
        this.displayDetailPPC = false;
        this.handleGetListPPC();
      },
      error => {
        this.spinnerService.hide();
      }
    );
  }
}

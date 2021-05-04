import { Component, OnInit } from '@angular/core';
import { SelectItem, PrimeNGConfig } from 'primeng/api';
import { Product } from './product';
import { ProductService } from './productservice';
import { SortEvent } from 'primeng/api';
import { PPCService } from 'src/app/services/apis/ppc.service';
import { PPCModel, PPCStatusOption } from 'src/app/models/ppc.model';
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
  ppcList: PPCModel[] = [];
  displayDetailPPC = false;
  rangeDates: any;
  constructor(
    private ppcService: PPCService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.handleGetListPPC();
  }

  showModal(): void {
    this.displayDetailPPC = true;
  }

  handleGetListPPC(): void {
    this.spinnerService.show();
    this.ppcService
      .getListPPC({
        end: (this.rangeDates && this.rangeDates[1]) || '',
        keyWord: this.searchKeyWord,
        start: (this.rangeDates && this.rangeDates[0]) || '',
        statusId: this.selectedPPCId || ''
      })
      .subscribe(res => {
        this.ppcList = res;
        this.spinnerService.hide();
      });
  }
}

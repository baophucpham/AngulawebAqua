export class PPCModel {
  id: string;
  userSubmited: string;
  serialNumber: string;
  modelName: string;
  customerName: string;
  dateSubmited: string;
  waitingDay: string;
  status: string;

  constructor(data: any) {
    this.id = data.id;
    this.userSubmited = data.created_by;
    this.serialNumber = data.serial_number;
    this.modelName = data.model_name;
    this.customerName = data.customer_name;
    this.dateSubmited = data.created_date;
    this.waitingDay = data.waiting_day;
    this.status = StatusMapping[data.status];
  }
}

export const PPCStatusOption = [
  {
    id: 0,
    name: 'All'
  },
  {
    id: 1,
    name: 'Rejected'
  },
  {
    id: 2,
    name: 'Approved'
  },
  {
    id: 3,
    name: 'Canceled'
  },
  {
    id: 4,
    name: 'In Progress'
  }
];

const StatusList = {
  Rejected: 'Rejected',
  Approved: 'Approved',
  Canceled: 'Canceled',
  'Re-submit': 'Re-submit',
  Submit: 'Submit',
  InProgress: 'In Progress'
};

const StatusMapping = {
  [StatusList.Rejected]: StatusList.Rejected,
  [StatusList.Approved]: StatusList.Approved,
  [StatusList.Canceled]: StatusList.Canceled,
  [StatusList['Re-submit']]: StatusList.InProgress,
  [StatusList.Submit]: StatusList.InProgress
};

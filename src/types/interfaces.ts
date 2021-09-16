export interface IApiResponse {
  id: number;
  name: string;
  gender: string;
  occupation: string;
  avatar: string;
  catalogSKU: number;
  goods: number[];
  fakeField1: number;
  fakeField2: number;
  fakeField3: number;
  fakeField4: number;
  fakeField5: number;
  fakeField6: number;
}

export interface IUser {
  id: number;
  name: string;
}

export interface IColumn {
  id: string;
  label: string;
}
import { CorporateCustomer } from "./corporateCustomer";
import { ResponseModel } from "./responseModel";

export interface CorporateCustomerResponseModel extends ResponseModel {

  data:CorporateCustomer[];

}

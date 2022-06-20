import { IndividualCustomer } from "./individualCustomer";
import { ResponseModel } from "./responseModel";

export interface IndividualCustomerResponseModel extends ResponseModel {

  data:IndividualCustomer[];
}

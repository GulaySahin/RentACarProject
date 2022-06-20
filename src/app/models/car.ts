import { Brand } from "./brand";
import { Color } from "./color";

export interface Car extends Brand,Color{
  carId:number;
  carName:string;
  modelYear:number;
  dailyPrice:number;
  description:string;
  kilometer:number;
  city:string;
  findexPoint:number;
  carCare: boolean;

}

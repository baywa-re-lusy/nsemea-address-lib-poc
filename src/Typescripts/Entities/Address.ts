import { AddressBase } from "@nsemea_lib/Core/DataAccess/AddressBase";
import {FieldTypeDecorator} from "@nsemea_lib/Core/DataAccess/NSTypedRecord";

export class Address extends AddressBase {
  @FieldTypeDecorator()
  accessor custrecord_deliveryappt: boolean;

  @FieldTypeDecorator()
  accessor custrecord_callahead: boolean;

  @FieldTypeDecorator()
  accessor custrecord_liftgate: boolean;

  @FieldTypeDecorator()
  accessor custrecord_shipblind: boolean;

  @FieldTypeDecorator()
  accessor custrecord_default_shipping_instructions: string;

  @FieldTypeDecorator()
  accessor custrecord_freeshipping: boolean;

  @FieldTypeDecorator()
  accessor custrecord_residentialdelivery: boolean;

  @FieldTypeDecorator()
  accessor custrecord_smalltruck: boolean;

  @FieldTypeDecorator()
  accessor custrecord_truckwforkliftreq: boolean;

  @FieldTypeDecorator()
  accessor custrecord_craneonsite: boolean;

  @FieldTypeDecorator()
  accessor custrecord_timedeliveryfrom: number;

  @FieldTypeDecorator()
  accessor custrecord_timedeliverytill: number;

  @FieldTypeDecorator()
  accessor custrecord_delivery_am: boolean;

  @FieldTypeDecorator()
  accessor custrecord_delivery_pm: boolean;

  @FieldTypeDecorator()
  accessor custrecord_itsy_difficult_delivery: boolean;

  @FieldTypeDecorator()
  accessor custrecord_itsy_side_unload: boolean;

  @FieldTypeDecorator()
  accessor custrecord_itsy_manned_unloading_place: boolean;

  @FieldTypeDecorator()
  accessor custrecord_itsy_customer_owns_a_forklift: boolean;

  @FieldTypeDecorator()
  accessor custrecord_fixedshippingcosts: number;
}
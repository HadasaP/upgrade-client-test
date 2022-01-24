import { Address } from "./address";
import { CodeValueModel } from "./codeValueModel";

export class ContactPerson {
    constructor(_id: number, _deliveryFlag: boolean, _type: CodeValueModel, _firstName: string, _lastName: string,
        _identity: number, _address: Address, _email: string) {
        this.id = _id;
        this.deliveryFlag = _deliveryFlag;
        this.type = _type;
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.identity = _identity;
        this.address = _address;
        this.email = _email;
    }

    id: number;
    deliveryFlag: boolean;
    type: CodeValueModel;
    firstName: string;
    lastName: string;
    identity: number;
    address: Address;
    email: string
}
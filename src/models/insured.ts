import { Address } from "./address";

export class Insured {
    constructor(_companyEmployer: boolean, _position: string, _identity: number, _firstName: string, _lastName: string,
        _age: number, _lastJobDescription: string, _smokingCode: number, _email: string, _address: Address) {
        this.companyEmployer = _companyEmployer;
        this.position = _position;
        this.identity = _identity;
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
        this.lastJobDescription = _lastJobDescription;
        this.smokingCode = _smokingCode;
        this.email = _email;
        this.address = _address;
    }
    companyEmployer: boolean;
    position: string;
    identity: number;
    firstName: string;
    lastName: string;
    age: number;
    lastJobDescription: string;
    smokingCode: number;
    email: string;
    address: Address;
}
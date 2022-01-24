export class Address {
    constructor(_cityName: string, _streetName?: string, _cellPhone?: string, _homeNumber?: number) {
        this.cityName = _cityName;
        this.streetName = _streetName || '';
        this.cellPhone = _cellPhone || '';
        this.homeNumber = _homeNumber!;
    }
    cityName: string;
    streetName: string;
    cellPhone: string;
    homeNumber: number;
}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cellPhone'
})
export class CellPhonePipe implements PipeTransform {

  transform(phoneNumber: string): any {
    if (typeof phoneNumber == 'string') {
      phoneNumber = phoneNumber.slice(0, 3) + "0-" + phoneNumber.slice(3);
    }
    return phoneNumber;
  }
}
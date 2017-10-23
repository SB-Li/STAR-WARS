import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class orderByPipe implements PipeTransform {

  transform(value: any, args?: any): any {

  	let flag = true;
    while(flag) {
        flag = false;
        for (var i=0; i < value.length-1; i++) {
            if (value[i] > value[i+1]) {
                let temp = value[i];
                value[i] = value[i+1];
                value[i+1] = temp;
                flag = true;
            }
        }
    };
    return value;
  }

}

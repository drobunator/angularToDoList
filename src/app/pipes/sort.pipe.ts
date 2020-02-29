import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {


  transform(array, [val, key]) {
    if (!val && !key) {
      return array;
    }

    if (val === 'min') {
      const newArr = array.sort((a, b) => {

        if (typeof a[key] === 'number' || typeof a[key] === 'boolean') {
          return a[key] - b[key];
        } else if (typeof a[key] === 'string') {
          if (a[key].toLowerCase() > b[key].toLowerCase()) {
            return -1;
          } else if (a[key].toLowerCase() < b[key].toLowerCase()) {
            return 1;
          }
        } else {
          console.error('key is not valid');
          return array;
        }
      });
      return newArr;
    }


    if (val === 'max') {
      const newArr = array.sort((a, b) => {
        if (typeof a[key] === 'number' || typeof a[key] === 'boolean') {
          return b[key] - a[key];
        } else if (typeof a[key] === 'string') {
          if (a[key].toLowerCase() < b[key].toLowerCase()) {
            return -1;
          } else if (a[key].toLowerCase() > b[key].toLowerCase()) {
            return 1;
          }
        } else {
          console.error('key is not valid');
          return array;
        }
      });
      return newArr;
    }
  }
}

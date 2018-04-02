import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(value: any[]): any {

    let noimage = 'assets/img/noimage.png';

    if(!value){
      return noimage;
    }
    //si existe el arreglo y tiene mas de una foto, regresa la url de pos 1, si no, regresa la noimage
    return (value.length > 0)? value[1].url : noimage;
  }

}

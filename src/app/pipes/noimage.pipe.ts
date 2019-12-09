import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[] ): string {

    if (!images) {
      return 'https://www.quantabiodesign.com/wp-content/uploads/No-Photo-Available.jpg';
    }

    if ( images.length > 0) {

      return images[0].url;

    }




    return null;
  }

}

import { Component } from '@angular/core';
import { SERVICES } from 'src/app/mock-services';
import { Service } from 'src/app/Service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = SERVICES
  totalPrice: number = 0

  selectItem(service: Service): void {

    if (service.active === false) {
      service.active = true
      service.color = 'green'
      this.totalPrice += service.price

    } else {
      this.totalPrice -= service.price
      service.color = 'pink'
      service.active = false
    }

  }
}
import { Component } from '@angular/core';


interface IProduct {
  id: number;
  title: string;
  price: number;
}

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.css']
})
export class Ejemplo1Component {

  // variables
  mensaje: string = "Hola mundo desde ejemplo1";
  precio: number = 3.99;

  // objeto
  product1: IProduct = {
    id: 1,
    title: 'Ordenador portátil MSI Modern',
    price: 23.0
  }

  checkPrice(): string {
    if (this.product1.price <= 50)
      return "green";
    else if (this.product1.price <= 100)
      return "blue"
    else
      return "red";
  }
}

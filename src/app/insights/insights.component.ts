import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../assets/canvasjs.min.js';
import { ProductsService } from '../products.service.js';
import { ProductDetails } from '../product-details.js';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css']
})
export class InsightsComponent implements OnInit {

  products;

  constructor(private productService : ProductsService) {
    
   }

  ngOnInit() {

    this.productService.getProducts().subscribe(data => {
      this.products = data.map(item => {
        let obj = { y: Number(item.availableUnits), label: item.name};
        return obj;
      });
      this.drawChart(this.products);
    });
  }
  
  drawChart(products) {
    console.log(products);
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Inventory Insights"
      },
      data: [{
        type: "column",
        dataPoints: products
      }]
    });
      
    chart.render();
  }


}


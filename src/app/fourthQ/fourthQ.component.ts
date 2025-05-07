import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-fourthQ',
  templateUrl: './fourthQ.component.html',
})
export class FourthQComponent implements OnInit {
    data: any = [];  

    constructor(private http: HttpClient) {}

    ngOnInit() {
      this.getData();  
    }
    
    getData() {
        const apiUrl = 'https://www.trcloud.co/test/api.php';  
        
        this.http.get(apiUrl).subscribe(
          (response: any) => {
            console.log('Data fetched:', response);
            this.data = response;  
            this.createBarChart();  
            this.createPolarAreaChart();
          },
          (error) => {
            console.error('There was an error!', error);  
          }
        );
    }

 
    createBarChart() {
      if (this.data && this.data.length > 0) {
        const chartData = this.data.map((item: any) => ({
          City: item.City,
          Population: item.Population,
          Country: item.Country
        }));

        new Chart(
          document.getElementById('barChart') as HTMLCanvasElement,  
          {
            type: 'bar', 
            data: {
              labels: chartData.map((row: any) => row.City),  
              datasets: [
                {
                  label: 'Population by Country',  
                  data: chartData.map((row: any) => row.Population),  
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                  ],
                  borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                  ],
                  borderWidth: 1
                },
              ],
            },
            
          }
        );
      }
    }
    createPolarAreaChart() {
        if (this.data && this.data.length > 0) {
        const chartData = this.data.map((item: any) => ({
            City: item.City,
            Population: item.Population,
            Country: item.Country
        }));

        new Chart(
            document.getElementById('polarAreaChart') as HTMLCanvasElement,  
            {
            type: 'polarArea', 
            data: {
                labels: chartData.map((row: any) => row.City),  
                datasets: [
                {
                    label: 'Population by Country',  
                    data: chartData.map((row: any) => row.Population),  
                    backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                    ],
                    borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                    ],
                    borderWidth: 1
                },
                ],
            },
            
            }
        );
        }
    }
}

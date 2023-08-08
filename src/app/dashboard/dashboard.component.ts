import { Component, OnInit,AfterViewInit  } from '@angular/core';
import { UsersService } from '../services/users.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {

  histogramChart: any;
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    
    this.usersService.getAllUSers().subscribe((res: any) => {
      console.log(res);
     
    })
   
  }

  ngAfterViewInit() {
    this.createHistogramChart();

  }
  
  
  createHistogramChart() {
    const ctx = document.getElementById('histogramChart') as HTMLCanvasElement;
    this.histogramChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3'], // Labels pour les barres
        datasets: [
          {
            label: 'Données',
            data: [10, 20, 15], // Valeurs pour les barres
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
    });
  }
  
}

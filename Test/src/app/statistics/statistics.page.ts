import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {
  monthlyChart: any;
  distributionChart: any;
  weeklyChart: any;

  constructor() {}

  ngOnInit() {
    this.initializeCharts();
  }

  ionViewDidEnter() {
    this.initializeCharts();
  }

  private initializeCharts() {
    this.createMonthlyChart();
    this.createDistributionChart();
    this.createWeeklyChart();
  }

  private createMonthlyChart() {
    const ctx = document.getElementById('monthlyChart') as HTMLCanvasElement;
    if (this.monthlyChart) {
      this.monthlyChart.destroy();
    }
    this.monthlyChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
          label: 'Mood Score',
          data: [7, 8, 6, 9],
          borderColor: '#244a6d',
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  private createDistributionChart() {
    const ctx = document.getElementById('distributionChart') as HTMLCanvasElement;
    if (this.distributionChart) {
      this.distributionChart.destroy();
    }
    this.distributionChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Happy', 'Neutral', 'Sad', 'Excited', 'Tired'],
        datasets: [{
          data: [30, 20, 15, 25, 10],
          backgroundColor: [
            '#4CAF50',
            '#FFC107',
            '#F44336',
            '#2196F3',
            '#9C27B0'
          ]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  private createWeeklyChart() {
    const ctx = document.getElementById('weeklyChart') as HTMLCanvasElement;
    if (this.weeklyChart) {
      this.weeklyChart.destroy();
    }
    this.weeklyChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Mood Score',
          data: [8, 7, 9, 6, 8, 9, 7],
          backgroundColor: '#244a6d'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
}

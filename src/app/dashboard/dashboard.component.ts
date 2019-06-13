import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Dashboard } from './dashboard.model';
import { NgxPackeryOptions, NgxPackeryService } from 'ngx-packery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public test: String = 'test';
  public board: Dashboard;
  public packeryOptions: NgxPackeryOptions = {
    gutter: 20,
    horizontal: true,
  }

  constructor(private dashboardService: DashboardService, private packeryService: NgxPackeryService) { }

  ngOnInit() {
    this.dashboardService.getBoard().subscribe((board: Dashboard) => {
      this.board = board;
      setTimeout(() => {
        this.packeryService.reloadItems();
        this.packeryService.layout();
      }, 0);
    })
  }

}

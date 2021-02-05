import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {
  gotIt: any;
  constructor(private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.gotIt = this.activeRouter.snapshot.queryParamMap.get('inputText');
  }

}

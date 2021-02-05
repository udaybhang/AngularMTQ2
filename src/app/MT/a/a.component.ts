import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  constructor(private router: Router, private activeRouter: ActivatedRoute) { }
  getVal(text: any) {
    this.router.navigate(['home/bcomponent'], { queryParams: { 'inputText': text } });
  }
  ngOnInit(): void {
    // console.log(this.activeRouter.snapshot.queryParamMap.get('inputText'));
  }

}

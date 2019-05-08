import { Component, OnInit } from '@angular/core';
import { FACTS } from '../fact/mock-facts';

@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.css']
})
export class FactComponent implements OnInit {
  facts = FACTS;

  constructor() { }

  ngOnInit() {
  }

}

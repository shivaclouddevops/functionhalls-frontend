import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-dasboard',
  templateUrl: './owner-dasboard.component.html',
  styleUrls: ['./owner-dasboard.component.css']
})
export class OwnerDasboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigateByUrl("/header")
  }

}

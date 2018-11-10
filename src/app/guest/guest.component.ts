import { Component, OnInit } from '@angular/core';
import { CodebreakerService } from '../codebreaker.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {

  public value : any = '';
  public body: any;
  public resp : any = '';

  constructor(public service: CodebreakerService) { }

  ngOnInit() {
    this.guestNumber();
  }

  asignateSectret(body: string): void{
    this.service.guestNumber(body).subscribe((data) => {
      console.log(data);
    });
  }

  guestNumber(){
    this.body = null;
    this.asignateSectret(JSON.stringify(this.body));
  }


  validateValue(){
    this.service.guestNumberValue(this.value).subscribe((data) => {
      console.log(data);
      this.resp = data;
    });
  }



}

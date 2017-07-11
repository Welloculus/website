import { Component, OnInit } from '@angular/core';
import { Http, Response,  Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

public success=false;
public warning=false;

constructor(public http: Http) { }

  ngOnInit() {
  }

  mailForm(value: any) {
  console.log(value);

     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });

     this.http.post("https://formspree.io/welloculus@gmail.com", value, options).toPromise()
	           .then(this.extractData)
                   .catch(this.handleErrorPromise);


   }

     private extractData(res: Response) {
          let body = res.json();
          if(body.success){
               $("#success").attr("display");
               $("#success").show();
               $("#warning").hide();

               $("input#name").val('');
               $("input#_replyto").val('');
               $("input#_subject").val('');
               $("textarea#message").val('');

               setTimeout(function() {
                    $("#success").hide();
               }.bind(this), 15000);
          }else{
               $("#warning").attr("display");
               $("#success").hide();
               $("#warning").show();
               setTimeout(function() {
                    $("#warning").hide();
               }.bind(this), 15000);
          }
          return body.data || {};
     }

     private handleErrorPromise (error: Response | any) {
          console.error(error.message || error);
          return Promise.reject(error.message || error);
     }
}

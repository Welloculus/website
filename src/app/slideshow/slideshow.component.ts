import { Component, OnInit, ViewChild } from '@angular/core';
import { VideoDetails } from './video-details';
import { ModalDirective } from 'ngx-bootstrap/modal';

declare var $:any;

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
     bgImg1: string;
     bgImg2: string;
     bgImg3: string;
     user_details:VideoDetails;
     provider_details:VideoDetails;
     caretaker_details:VideoDetails;

     @ViewChild('childModal') public childModal:ModalDirective;


  constructor() {
     this.bgImg1="./assets/images/slideshow/Website-Health-1440-x-700.png";
     this.bgImg2="./assets/images/slideshow/slider3.png";
     this.bgImg3="./assets/images/slideshow/slider2.png";
     this.user_details = {video: "https://www.youtube.com/embed/AR6hyuPdyrM", title:"Welloculus for patient", bgimage:"./assets/images/front-video/user.png"};
     this.provider_details = {video: "https://www.youtube.com/embed/ae3f_ngNtY0", title:"Welloculus for healthcare provider", bgimage:"./assets/images/front-video/provider.png"};
     this.caretaker_details = {video: "https://www.youtube.com/embed/g32t4DCptx0", title:"Welloculus for caretaker", bgimage:"./assets/images/front-video/caretaker.png"};
  }

  ngAfterViewInit() {
     $('#slideshow-carousel').carousel();
  }

  ngOnInit() {

  }

  public showChildModal(data){
     $(".modal-title").text(data.title);
     $(".modal-body").find('iframe').attr('src',data.video);
     this.childModal.show();
  }

  public hideChildModal():void {
     $('.modal-body').find('iframe').attr('src',' ');
     $(".modal-title").text(' ');
    this.childModal.hide();
  }

}

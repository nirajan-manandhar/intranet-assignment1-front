import { Component, OnInit } from '@angular/core';
import { BoatService } from 'src/app/services/boat.service';
import { Boat } from 'src/app/models/boat';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-boat',
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.css']
})
export class BoatComponent implements OnInit {

  boats: Boat[];
  Editor = ClassicEditor;

  constructor(private boatService: BoatService, private router: Router) {

  }

  ngOnInit() {
    this.getBoats();
  }

  getBoats() {
    this.boatService.getAll().then(result => {
      this.boats = result;
      console.log(JSON.stringify(this.boats));
    }).catch(error => {
      console.log(error);
      this.router.navigate(['/home']);
    });
  }

  doDelete(boatId: number) {
    this.boatService.deleteById(boatId).then(result => {
      console.log(JSON.stringify(result));
      this.router.navigate(['/boat']);
    }).catch(error => {
      console.log(error);
      this.router.navigate(['/boat']);
    });
  }



}

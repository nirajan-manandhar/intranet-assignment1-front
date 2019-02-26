import { Component, OnInit } from '@angular/core';
import { Boat } from 'src/app/models/boat';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BoatService } from 'src/app/services/boat.service';

@Component({
  selector: 'app-boat-add',
  templateUrl: './boat-add.component.html',
  styleUrls: ['./boat-add.component.css']
})
export class BoatAddComponent implements OnInit {

  boat: Boat;
  Editor = ClassicEditor;
  boatName = new FormControl('', [Validators.required]);
  picture = new FormControl('', [Validators.required]);
  lengthInFeet = new FormControl('', [Validators.required]);
  make = new FormControl('', [Validators.required]);
  model = {
    "editorData": ""
  };

  constructor(private router: Router, private boatService: BoatService) { }

  ngOnInit() {
  }

  getBoatNameErrorMessage() {
    return this.boatName.hasError('required') ? 'You must enter boat name' : '';
  }

  getPictureErrorMessage() {
    return this.picture.hasError('required') ? 'You must enter picture' : '';
  }

  getLengthInFeetErrorMessage() {
    return this.lengthInFeet.hasError('required') ? 'You must enter length in feet' : '';
  }

  getMakeErrorMessage() {
    return this.make.hasError('required') ? 'You must enter make' : '';
  }

  getDescriptionErrorMessage() {
    return this.boat.description ? 'You must enter description' : '';
  }

  doAdd() {
    let payload = {
      "BoatName": this.boatName.value,
      "Picture": this.picture.value,
      "lengthInFeet": this.lengthInFeet.value,
      "make": this.make.value,
      "description": this.model["editorData"]
    }
    this.boatService.add(payload).then(result => {
      this.router.navigate(['/boat']);
    }).catch(error => {
      console.error(error);
    });
  }

}

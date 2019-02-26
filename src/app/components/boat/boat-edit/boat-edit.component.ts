import { Component, OnInit } from '@angular/core';
import { BoatService } from 'src/app/services/boat.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Boat } from 'src/app/models/boat';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-boat-edit',
  templateUrl: './boat-edit.component.html',
  styleUrls: ['./boat-edit.component.css']
})
export class BoatEditComponent implements OnInit {

  boat: Boat;
  Editor = ClassicEditor;
  boatName = new FormControl('', [Validators.required]);
  picture = new FormControl('', [Validators.required]);
  lengthInFeet = new FormControl('', [Validators.required]);
  make = new FormControl('', [Validators.required]);
  model = {};

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private boatService: BoatService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('boatId');
    this.boatService.getBoatById(id).then(result => {
      this.boat = result;
      this.boatName.setValue(this.boat.boatName);
      this.picture.setValue(this.boat.picture);
      this.lengthInFeet.setValue(this.boat.lengthInFeet);
      this.make.setValue(this.boat.make);
      this.model["editorData"] = this.boat.description;
    }).catch(error => {
      this.router.navigate(['/home']);
      console.log(error);
    });
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

  doEdit() {
    let payload = {
      "BoatName": this.boatName.value,
      "Picture": this.picture.value,
      "lengthInFeet": this.lengthInFeet.value,
      "make": this.make.value,
      "description": this.model["editorData"]
    }
    this.boatService.updateById(this.boat.boatId, payload).then(result => {
      this.router.navigate(['/boat']);
    }).catch(error => {
      console.error(error);
    });
  }

}

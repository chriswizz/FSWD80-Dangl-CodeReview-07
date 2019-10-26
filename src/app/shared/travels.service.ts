import { Injectable } from '@angular/core';
import { FormControl , FormGroup , Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class TravelsService {
  travelsList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) {
    this.travelsList = this.firebase.list("travels");
  }

  form = new FormGroup({
    $key: new FormControl(null),
    city: new FormControl('', Validators.required),
    description: new FormControl(''),
    imageLink: new FormControl('', Validators.pattern(".*\.(gif|jpg|jpeg|tiff|png)$"))
  });

  getTravels() {
    return this.travelsList.snapshotChanges();
  }

  insertTravels(travels) {
    this.travelsList.push({
      city: travels.city,
      description: travels.description,
      imageLink: travels.imageLink
    });
  }

  populateForm(travels) {
    this.form.setValue(travels);
  }

  updateTravels(travels) {
    this.travelsList.update(travels.$key,{
     city: travels.city,
      description: travels.description,
      imageLink: travels.imageLink
    });
  }

  deleteTravels($key: string){
    this.travelsList.remove($key);
  }
}

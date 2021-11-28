import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
// import { DetailsModel } from 'src/app/OwnerModule/models/details.model';
// import { SessionStorageService } from 'src/app/OwnerModule/services/sessionstorage.service';
// import { DetailsService } from 'src/app/OwnerModule/services/details.service';
import { LocalStorageService } from 'src/app/OwnerModule/services/localstorage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  // detailsForm: FormGroup;

  DetailsForm: FormGroup;;
  OwnerDetails:any;
  // detailsmodel: DetailsModel[] = [];

  constructor(
    private router: Router,
    // private details: DetailsService,
    private _fb: FormBuilder,
    private localstorageservice: LocalStorageService

  ) { }

  ngOnInit(): void {
    this.OwnerDetails = JSON.parse(window.localStorage.getItem('OwnerDetails'));
    this.DetailsForm = this._fb.group({

      name: new FormControl(this.OwnerDetails ? this.OwnerDetails.name : '', Validators.required),
      firstname: new FormControl(this.OwnerDetails ? this.OwnerDetails.firstname : '', Validators.required),
      lastname: new FormControl(this.OwnerDetails ? this.OwnerDetails.lastname : '', Validators.required),
      functionhalldescription: new FormControl(this.OwnerDetails ? this.OwnerDetails.functionhalldescription : '', Validators.required),
      functionhalltype: new FormControl(this.OwnerDetails ? this.OwnerDetails.functionhalltype : '', Validators.required),
      maximumguest: new FormControl(this.OwnerDetails ? this.OwnerDetails.maximumguest : '', Validators.required),
      briderooms: new FormControl(this.OwnerDetails ? this.OwnerDetails.briderooms : '', Validators.required),
      // AMENITIES
      parking: new FormControl(this.OwnerDetails ? this.OwnerDetails.parking : '', Validators.required),
      internet: new FormControl(this.OwnerDetails ? this.OwnerDetails.internet : '', Validators.required),
      nosmoking: new FormControl(this.OwnerDetails ? this.OwnerDetails.nosmoking : '', Validators.required),
      airconditioning: new FormControl(this.OwnerDetails ? this.OwnerDetails.airconditioning : '', Validators.required),
      lightingsystem: new FormControl(this.OwnerDetails ? this.OwnerDetails.lightingsystem : '', Validators.required),
      dancefloor: new FormControl(this.OwnerDetails ? this.OwnerDetails.dancefloor : '', Validators.required),
      noalcohol: new FormControl(this.OwnerDetails ? this.OwnerDetails.noalcohol : '', Validators.required),
      soundsystem: new FormControl(this.OwnerDetails ? this.OwnerDetails.soundsystem : '', Validators.required),
      //eventType
      Banquethall: new FormControl(this.OwnerDetails ? this.OwnerDetails.Banquethall : '', Validators.required),
      Partyroom: new FormControl(this.OwnerDetails ? this.OwnerDetails.Partyroom : '', Validators.required),
      Conference: new FormControl(this.OwnerDetails ? this.OwnerDetails.Conference : '', Validators.required),
      Performance: new FormControl(this.OwnerDetails ? this.OwnerDetails.Performance : '', Validators.required),
      Weddinghall: new FormControl(this.OwnerDetails ? this.OwnerDetails.Weddinghall : '', Validators.required),
      eventspace: new FormControl(this.OwnerDetails ? this.OwnerDetails.eventspace : '', Validators.required),
      Nightclub: new FormControl(this.OwnerDetails ? this.OwnerDetails.Nightclub : '', Validators.required),

    }
    )
  }


  back() {
    this.router.navigateByUrl("/location");

  }
  onclick() {

    this.OwnerDetails = {

      name: this.DetailsForm.get('name').value,
      // firstname: this.DetailsForm.get('firstname').value,
      // lastname: this.DetailsForm.get('lastname').value,
      functionhalldescription: this.DetailsForm.get('functionhalldescription').value,
      functionhalltype: this.DetailsForm.get('functionhalltype').value,
      maximumguest: this.DetailsForm.get('maximumguest').value,
      briderooms: this.DetailsForm.get('briderooms').value,
      // AMENITIES
      parking: this.DetailsForm.get('parking').value,
      internet: this.DetailsForm.get('internet').value,
      nosmoking: this.DetailsForm.get('nosmoking').value,
      airconditioning: this.DetailsForm.get('airconditioning').value,
      lightingsystem: this.DetailsForm.get('lightingsystem').value,
      noalcohol: this.DetailsForm.get('noalcohol').value,
      soundsystem: this.DetailsForm.get('soundsystem').value,
      //eventType
      Banquethall: this.DetailsForm.get('Banquethall').value,
      Partyroom: this.DetailsForm.get('Partyroom').value,
      Conference: this.DetailsForm.get('Conference').value,
      Performance: this.DetailsForm.get('Performance').value,
      Weddinghall: this.DetailsForm.get('Weddinghall').value,
      eventspace: this.DetailsForm.get('eventspace').value,
      Nightclub: this.DetailsForm.get('Nightclub').value,

    }

    this.localstorageservice.set("OwnerDetails", this.OwnerDetails);
    this.router.navigateByUrl("/photos");
  }









}



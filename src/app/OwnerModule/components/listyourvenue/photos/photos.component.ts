import { PhotosService } from 'src/app/OwnerModule/services/Photos.service';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  images = [];
  count=0;


  constructor(private router: Router, private photos: PhotosService) { }


  ngOnInit(): void {
  }

  onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        this.count = this.count + 1;

        reader.onload = (event: any) => {
          // console.log(event.target.result);
          this.images.push(event.target.result);
        }

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  back() {
    this.router.navigateByUrl("/details")
  }

  next() {
    // const req ={
    //   file: this.images,
    //   correlationid:4511
    // }

    const formData = new FormData();
    for (let j = 0; j < this.count; j++) {
      formData.append('file', this.images[0]);
      this.photos.postFile(formData).subscribe(data => {
        console.log(data)
      });
    }
      // this.router.navigateByUrl("/security")

  }
}

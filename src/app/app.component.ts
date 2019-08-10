import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public imagePath;
  imgURL: any;

  constructor(private http: HttpClient) {

  }

  inputFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      const picture = event.target.files[0];

      const formData = new FormData();
      formData.append('foto', picture);

      this.http.post('http://localhost:8080/fotos', formData)
        .subscribe(Response => console.log(Response, 'it works.'));

      const reader = new FileReader();
      this.imagePath = event.target.files;
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = showIgm => {
        this.imgURL = reader.result;
      };
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  selectedVideoFile: File | null = null;
  uploadedVideoUrl: string | null = null;

  selectedFile: File | null = null;
  uploadedImageUrl: string | null = null;

  data = {name: 'Pavithra', age: 30};

  users: any[] = [];
  constructor(private dataService: DataService, private http: HttpClient) {}

  ngOnInit(): void {
      this.dataService.getData().subscribe(
        (data)=>{
          this.users = data;
        },
        (error) =>{
          console.error('Error fetching data', error);
        }
      );
  }

  sendData(){
    this.dataService.sendData(this.data).subscribe(
      response=>{
        console.log('Response from server:', response);
      },
      error => {
        console.error('Error:', error);
      }
    )
  }

  onFileSelected(event: any){
    if (event.target.files && event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      if (this.selectedFile) {
        console.log('File selected:', this.selectedFile.name);
      } else {
        console.log('No file selected');
      }
    }
  }

  uploadImage(){
    if(this.selectedFile)  {
      const formData = new FormData();
      formData.append('image', this.selectedFile);
      this.http.post<{ imageUrl: string }>('http://localhost:4000/api/upload', formData)
      .subscribe(
        (response: any) => {
          console.log('Image uploaded successfully', response.imageUrl);
          this.uploadedImageUrl = response.imageUrl; 
        },
        error => {
          console.error('Error uploading image:', error);
        }
      );
    }else {
      console.error('No file selected for upload');
    }
  }

  onVideoFileSelected(event: any){
    if (event.target.files && event.target.files.length > 0) {
      this.selectedVideoFile = event.target.files[0];
      if (this.selectedVideoFile) {
        console.log('Video file selected:', this.selectedVideoFile.name);
      } else {
        this.selectedVideoFile = null;
        console.log('No video file selected');
      }
    }
  }

  uploadVideo(){
    if(this.selectedVideoFile){
      this.dataService.uploadVideo(this.selectedVideoFile).subscribe(
        (response: string) =>{
          console.log('Video uploaded successfully', response);
          this.uploadedVideoUrl = response; 
        },
        error => {
          console.error('Error uploading video:', error);
        }
      );
    }else {
      console.error('No video file selected for upload');
    }
  }
  
}

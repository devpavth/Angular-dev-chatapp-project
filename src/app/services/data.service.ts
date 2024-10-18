import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private cloudName = 'dby7euuvf';  
  private uploadPreset = 'my_unsigned_preset';  
  private cloudinaryApiUrl = `https://api.cloudinary.com/v1_1/${this.cloudName}/image/upload`;

  private apiUrl = 'http://localhost:4000/api/data';
  private apiImageUrl = 'http://localhost:4000/api/upload';
  private apiVideoUrl = 'http://localhost:4000/api/upload-video';
  constructor(private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }

  sendData(data: any): Observable<any>{
    return this.http.post<any>(this.apiUrl, data);
  }

  uploadImageToCloudinary(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', this.uploadPreset);

    return this.http.post<any>(this.cloudinaryApiUrl, formData);
  }

  uploadImage(file: File): Observable<any>{
    const formData = new FormData();
    formData.append('image', file, file.name);
    console.log('Form data:', formData.get('image'));

    return this.http.post(this.apiImageUrl, formData, { responseType: 'text'})
    .pipe(
      catchError(error => {
        console.error('Error uploading image:', error); 
        return throwError(() => new Error('Image upload failed'));
      })
    );
  }

  uploadVideo(file: File): Observable<any>{
    const formData = new FormData();
    formData.append('video', file, file.name);  
    console.log('Form data:', formData.get('video'));

    return this.http.post<{ videoUrl: string }>(this.apiVideoUrl, formData)
    .pipe(
      map((response) => {
        console.log('Video uploaded successfully, URL:', response.videoUrl); 
        return response.videoUrl;  
      }),
      catchError(error => {
        console.error('Error uploading video:', error); 
        return throwError(() => new Error('Video upload failed'));
      })
    );
  }

  // uploadImageToGithub(file: File): Observable<any>{
  //   const reader = new FileReader();
  //   const formData = new FormData();
  //   // formData.append('image', file);

  //   return new Observable(observer =>{
  //     reader.onloadend = () => {
  //       const base64Image = (reader.result as string).split(',')[1]; 
  //   })

  //   const headers = new HttpHeaders({
  //     'Authorization': `Client-ID ${this.clientId}`
  //   });
  //   return this.http.post<any>(this.imgurApiUrl, formData, { headers }).pipe(
  //     retryWhen(errors =>
  //       errors.pipe(
  //         scan((retryCount, err) => {
  //           if (retryCount >= 3) {
  //             throw err;
  //           }
  //           return retryCount + 1;
  //         }, 0),
  //         delayWhen(() => timer(2000)) // Wait 2 seconds before retrying
  //       )
  //     ),
  //     catchError(error => {
  //       console.error('Upload error:', error);
  //       return throwError(() => new Error('Error uploading image'));
  //     })
  //   );
    
  // }
}

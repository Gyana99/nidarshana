import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '../constants/api-endpoints';
import { HttpClient } from '@angular/common/http';
import { EncryptionService } from './encryption.service';
EncryptionService

@Injectable({
  providedIn: 'root'
})
export class CommanservService {

  constructor(private http: HttpClient, private encryptionService: EncryptionService) { }
  submitContact(data: any) {
    console.log(data);
    
    const payload = {
      data: this.encryptionService.encrypt(data)
    };

    return this.http.post(
      API_ENDPOINTS.CONTACT_US,
      payload
    );
  }
}

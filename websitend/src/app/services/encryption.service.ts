import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { API_ENDPOINTS } from '../constants/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  private readonly KEY = CryptoJS.enc.Utf8.parse(
    API_ENDPOINTS.KEY
  );

  encrypt(data: any): string {

    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      this.KEY,
      {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      }
    );

    return encrypted.toString();
  }

  decrypt(cipherText: string): any {

    const decrypted = CryptoJS.AES.decrypt(
      cipherText,
      this.KEY,
      {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      }
    );

    return JSON.parse(
      decrypted.toString(CryptoJS.enc.Utf8)
    );
  }
}
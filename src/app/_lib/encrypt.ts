import crypto from 'crypto';
import { algorithm, deriveKeyFromPassword, ivLength, salt } from './comman';
import { EncryptedData } from './type';

// AES encryption and decryption settings

// Define the type for encrypted data



// Function to encrypt a plain text with a custom password
export const encrypt=(text: string, password: string):string =>{
  const key = deriveKeyFromPassword(password, salt); // Derive key from password and salt
  const iv = crypto.randomBytes(ivLength); // Initialization vector
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
 

  // Combine salt, iv, and encrypted data into a single hex string
  const combinedData = salt.toString('hex') + iv.toString('hex') + encrypted;
  
  return combinedData;
}

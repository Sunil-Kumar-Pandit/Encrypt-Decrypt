import { algorithm, deriveKeyFromPassword, ivLength, saltLength } from "./comman";


import crypto from 'crypto';


// Function to decrypt the encrypted text with a custom password
 export const decrypt=(encryptedText: string, password: string): string =>{
   // Extract salt (first 16 bytes), IV (next 16 bytes), and encrypted data
  const salt = Buffer.from(encryptedText.substring(0, saltLength * 2), 'hex');
  const iv = Buffer.from(encryptedText.substring(saltLength * 2, saltLength * 2 + ivLength * 2), 'hex');
  const encryptedData = encryptedText.substring(saltLength * 2 + ivLength * 2);

  // Derive key from password and extracted salt
  const key = deriveKeyFromPassword(password, salt);
  
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  
  return decrypted;
  }
  
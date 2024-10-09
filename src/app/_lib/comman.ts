import crypto from 'crypto';



export const algorithm = 'aes-256-cbc'; // AES encryption with a 256-bit key
export const saltLength = 16; // Length of the random salt (in bytes)
export const ivLength = 16; // Length of the IV (in bytes)
export const salt = crypto.randomBytes(saltLength); // Generate a random salt



// Function to derive a key from a password using PBKDF2
export const deriveKeyFromPassword=(password: string, salt: Buffer): Buffer => {
    return crypto.pbkdf2Sync(password, salt, 100000, 32, 'sha256'); // Derive 32-byte (256-bit) key
  }
  

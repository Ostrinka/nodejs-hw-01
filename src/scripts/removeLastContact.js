import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    
    if (contacts.length > 0) {
      contacts.pop(); 
    }
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, undefined, 2));
    if (contacts.length === 0) {
      console.log('The array is empty');
    }
  } 
  catch (error) {
    console.error(error);
    throw error; 
  }
};

removeLastContact();

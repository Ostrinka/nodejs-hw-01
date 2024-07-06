import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    const emptyContacts = [];

    await fs.writeFile(PATH_DB, JSON.stringify(emptyContacts, undefined, 2));

    console.log('All contacts have been removed.');
  } catch (error) {
    console.error(error);
    throw error;
  }
};

removeAllContacts();

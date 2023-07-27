import * as admin from 'firebase-admin';

import path from 'path';

//initialize firebase sdk with config json, in my case its firebase.json created in root folder of project

admin.initializeApp({
  credential: admin.credential.cert(
    path.resolve(__dirname, '../../firebase.json'),
  ),
});

console.log('done');

export const getRecordById = async (collectionName: string, id: string) => {
  const docRef = await admin.firestore().collection(collectionName).doc(id);

  const docSnapShot = await docRef.get();

  console.log(docSnapShot.data());

  return docSnapShot.data();
};

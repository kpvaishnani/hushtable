import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore, getDocs } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private firestore: Firestore
  ) { }

  async getAll<T>(collectionName: string): Promise<T[]> {
    const collectionRef = collection(this.firestore, collectionName);
    const snapshot = await getDocs(collectionRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as T));
  }

  async create<T>(collectionName: string, data:any): Promise<void> {
    const collectionRef = collection(this.firestore, collectionName);
    await addDoc(collectionRef, data);
  }
}

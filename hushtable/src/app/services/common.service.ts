import { Injectable } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, Firestore, getDocs, updateDoc } from '@angular/fire/firestore';


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

  async update<T>(collectionName: string, id: string, data:any): Promise<void> {
    const docRef = doc(this.firestore, collectionName, id);
    await updateDoc(docRef, data);
  }

  async delete(collectionName: string, id: string): Promise<void> {
    const docRef = doc(this.firestore, collectionName, id);
    await deleteDoc(docRef);
  }
}

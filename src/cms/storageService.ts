import { storage } from './firebaseClient';
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';

/**
 * Uploads a shoe image file to Firebase Storage under the 'shoes_product' folder.
 * Bucket: gs://meister-6670d.firebasestorage.app/shoes_product
 * Returns the public download URL.
 */
export async function uploadShoeImage(file: File, shoeSlugOrId: string = 'shoe'): Promise<string> {
  if (!storage) {
    throw new Error('Firebase Storage is not initialized. Please verify Firebase configuration.');
  }

  try {
    const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const storagePath = `shoes_product/${shoeSlugOrId}_${Date.now()}_${sanitizedName}`;
    const imageRef = ref(storage, storagePath);

    const metadata = {
      contentType: file.type || 'image/jpeg',
    };

    const snapshot = await uploadBytesResumable(imageRef, file, metadata);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (err: any) {
    console.error('Firebase Storage upload error:', err);
    throw new Error(`Storage upload failed: ${err.message || 'Check storage permissions'}`);
  }
}

/**
 * Deletes an image from the Firebase Storage 'shoes_product' bucket if it was uploaded there.
 */
export async function deleteShoeImageByUrl(imageUrl: string): Promise<boolean> {
  if (!imageUrl || !storage) return false;

  try {
    // Only attempt deletion if it's a Firebase Storage URL or gs:// path
    if (imageUrl.includes('firebasestorage.googleapis.com') || imageUrl.startsWith('gs://')) {
      const imageRef = ref(storage, imageUrl);
      await deleteObject(imageRef);
      console.log('Successfully deleted image from storage:', imageUrl);
      return true;
    }
  } catch (err) {
    console.warn('Could not delete image from Firebase Storage (it may already be gone or permission denied):', err);
  }
  return false;
}

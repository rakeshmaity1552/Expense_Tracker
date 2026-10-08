import * as Sharing from 'expo-sharing';
export async function shareFile(uri,mimeType) { if(await Sharing.isAvailableAsync()) await Sharing.shareAsync(uri,mimeType?{mimeType,UTI:mimeType==='application/pdf'?'com.adobe.pdf':'org.openxmlformats.spreadsheetml.sheet'}:undefined); else throw new Error('Sharing is not available on this device.'); }

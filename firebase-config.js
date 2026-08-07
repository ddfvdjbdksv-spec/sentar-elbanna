// ============================================================
//  firebase-config.js
//  إعدادات Firebase — سنتر البنا
//
//  القاعدة النشطة: sentar-elbanna
//    (مزامنة الأجهزة + كل بيانات البرنامج)
//
//  ملاحظة مهمة:
//    - هذا الملف لا يُهيئ Firebase مباشرةً (لأن SDKs تُحمَّل async)
//    - التهيئة الفعلية تتم داخل ensureDeviceSyncFirebaseInitialized()
//      في app.js عند أول استخدام فعلي للشبكة
//    - window.FIREBASE_MAIN_CONFIG: يُخزَّن هنا للرجوع إليه إذا لزم
// ============================================================

window.FIREBASE_MAIN_CONFIG = {
    apiKey: "AIzaSyAfEMe02VObGnS3ZWuJ1SxgTOwGSPkLiSw",
    authDomain: "sentar-elbanna.firebaseapp.com",
    projectId: "sentar-elbanna",
    storageBucket: "sentar-elbanna.firebasestorage.app",
    messagingSenderId: "346535652734",
    appId: "1:346535652734:web:ef5fabf52c60dd7dfa172f",
    measurementId: "G-0K9RZBCG33"
};

// قاعدة المنصة التعليمية — معطّلة (الإعدادات فارغة عمداً)
window.FIREBASE_PLATFORM_CONFIG = null;

console.info('[firebase-config.js] ✅ إعدادات Firebase محمّلة — القاعدة النشطة: sentar-elbanna');

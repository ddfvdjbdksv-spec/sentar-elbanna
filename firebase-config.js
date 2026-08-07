// ============================================================
//  firebase-config.js
//  إعدادات Firebase — قاعدة بيانات المهندس اسماعيل الامام
//
//  القاعدة النشطة: ismaieil-alemam
//    (مزامنة الأجهزة + كل بيانات البرنامج)
//
//  ملاحظة مهمة:
//    - هذا الملف لا يُهيئ Firebase مباشرةً (لأن SDKs تُحمَّل async)
//    - التهيئة الفعلية تتم داخل ensureDeviceSyncFirebaseInitialized()
//      في app.js عند أول استخدام فعلي للشبكة
//    - window.FIREBASE_MAIN_CONFIG: يُخزَّن هنا للرجوع إليه إذا لزم
// ============================================================

window.FIREBASE_MAIN_CONFIG = {
    apiKey: "AIzaSyC7bc6YsejVbyZ5u_eizhZMpf4ipFVtXxg",
    authDomain: "ismaieil-alemam.firebaseapp.com",
    projectId: "ismaieil-alemam",
    storageBucket: "ismaieil-alemam.firebasestorage.app",
    messagingSenderId: "897432455640",
    appId: "1:897432455640:web:79238e047c57254409caad",
    measurementId: "G-D9M4P9T9EQ"
};

// قاعدة المنصة التعليمية — معطّلة (الإعدادات فارغة عمداً)
window.FIREBASE_PLATFORM_CONFIG = null;

console.info('[firebase-config.js] ✅ إعدادات Firebase محمّلة — القاعدة النشطة: ismaieil-alemam');

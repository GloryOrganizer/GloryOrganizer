// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js';
import { getDatabase, ref, set, get, child } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAuiS8lyYYyXP83UdEoIlpfUXw05qx2Jpg',
  authDomain: 'gloryorganizer-a5b98.firebaseapp.com',
  projectId: 'gloryorganizer-a5b98',
  storageBucket: 'gloryorganizer-a5b98.appspot.com',
  messagingSenderId: '978258349039',
  appId: '1:978258349039:web:771078e9ef84160814c41a',
  measurementId: 'G-2YZ18JJ7Z8',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

document.getElementById('submit').addEventListener('click', function (e) {
  set(ref(db, 'user/' + document.getElementById('name').value), {
    paket: document.getElementById('paket').value,
    nama: document.getElementById('name').value,
    NoHP: document.getElementById('phone').value,
    email: document.getElementById('email').value,
  });
  alert('Pesanan berhasil');
});

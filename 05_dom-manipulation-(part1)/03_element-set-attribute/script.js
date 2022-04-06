const judul = document.getElementsByTagName('h1')[0];
judul.setAttribute('name', 'sandhika');
judul.getAttribute('id');

const a = document.querySelector('section#a a');
a.setAttribute('id', 'link');
a.getAttribute('href');
a.removeAttribute('href');
document.addEventListener("DOMContentLoaded", () => {
    // Cek apakah tombol "Hubungi Kami" ada
    const hubungiKamiButton = document.querySelector('.hubungi-kami');
    const modal = document.getElementById('modal-content');
    const closeModal = document.querySelector('.modal-close');
    const closeButton = document.querySelector('.button-close');
  
    if (hubungiKamiButton && modal && closeModal && closeButton) {
      // Event Listener untuk membuka modal
      hubungiKamiButton.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'flex';
      });
  
      // Event Listener untuk menutup modal
      closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
      });
  
      closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
      });
    }
});
document.addEventListener("DOMContentLoaded", () => {
  // Ambil konten dari sessionStorage
  const content = sessionStorage.getItem('content');
  const IDcontent = document.getElementById('IDcontent');

  // Pastikan elemen IDcontent ada sebelum mengisi
  if (IDcontent && content) {
      IDcontent.innerHTML = content;
  }
});



















































// const contentbox = document.getElementById('IDcontent');

//   // Ambil data dari sessionStorage
//   const selectedUser = JSON.parse(sessionStorage.getItem('selectedUser'));

//   if (selectedUser) {

//       // build title//
//       const cardtitle = document.createElement('h2');
//       cardtitle.classList.add('title-card');
//       cardtitle.textContent = selectedUser.Title;
//       contentbox.appendChild(cardtitle);
      
//       //build subtitle//
//       const Subtitle = document.createElement('h3');
//       Subtitle.classList.add('subtitle-card');
//       Subtitle.textContent = selectedUser.Subtitle;
      
//       // build deskripsi//
//       const deskripsi = document.createElement('p');
//       deskripsi.classList.add('deskripsi-card');
//       deskripsi.textContent = selectedUser.Deskripsi;

//       //build image//
//       const image = document.createElement('img');
//       // image.classList.add('image');
//       image.src = selectedUser.gambar;


//       //   tambah element container
//     const container = document.createElement('div');
//     container.classList.add('container-content');

//     // masukan content yang sudah di build di atas//
//     container.appendChild(Subtitle);
//     container.appendChild(deskripsi);
//     container.appendChild(image);
    
//     contentbox.appendChild(container);  
//   } else {
//       contentbox.textContent = 'Data tidak tersedia.';
//   }
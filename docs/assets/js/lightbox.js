document.addEventListener('DOMContentLoaded', function() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  galleryItems.forEach(item => {
    item.addEventListener('click', function() {
      const imgSrc = this.querySelector('img').src;
      const lightbox = document.createElement('div');
      lightbox.id = 'lightbox';
      lightbox.innerHTML = `
        <div class="lightbox-content">
          <img src="${imgSrc}" alt="">
          <span class="close">&times;</span>
        </div>
      `;
      document.body.appendChild(lightbox);
      
      lightbox.querySelector('.close').addEventListener('click', function() {
        lightbox.remove();
      });
      
      lightbox.addEventListener('click', function(e) {
        if (e.target !== this.querySelector('img')) {
          lightbox.remove();
        }
      });
    });
  });
});
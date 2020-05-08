// Sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 250) {
      document.querySelector('#showcase-container').style.opacity = 0.9;
    } else {
      document.querySelector('#showcase-container').style.opacity = 1;
    }
  });
  
  
  // Smooth Scrolling
  $('#show-one a, .btn').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
  
      const hash = this.hash;
  
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 50
        },
        800
      );
    }
  });
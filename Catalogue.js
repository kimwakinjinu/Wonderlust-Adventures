document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      document.body.style.overflow = 'hidden';

      scrollToElement(card);

      const title = card.getAttribute('data-title');
      const description = card.getAttribute('data-description');
      const rating = card.getAttribute('data-rating');
  
      // Populate modal content
      document.getElementById('modalTitle').textContent = title;
      document.getElementById('modalDescription').textContent = description;
      document.getElementById('modalRating').textContent = rating;
  
      // Show modal
      document.getElementById('infoModal').style.display = 'block';
    });
  });
  
  // Close modal functionality
  document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('infoModal').style.display = 'none';
    document.body.style.overflow = 'auto';
  });
  
  // Hide modal when clicking outside content
  window.onclick = function(event) {
    if (event.target == document.getElementById('infoModal')) {
      document.getElementById('infoModal').style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  };

function scrollToElement(element) {
    element.scrollIntoView({
    behavior: 'smooth',
    block: 'start' // Align the top of the element with the top of the viewport
  });
}


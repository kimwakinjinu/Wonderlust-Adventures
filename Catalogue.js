document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {

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
  });
  
  // Hide modal when clicking outside content
  window.onclick = function(event) {
    if (event.target == document.getElementById('infoModal')) {
      document.getElementById('infoModal').style.display = 'none';
    }
  };

  function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    } else {
        console.error();
    }
  }

  document.getElementById("destinations_size").addEventListener("click", function() {
    scrollToElement("data-title")
  })
  
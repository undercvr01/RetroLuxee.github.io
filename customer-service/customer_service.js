
function toggleFAQ(faqItem) {
  faqItem.classList.toggle('active');
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});


function toggleAllFAQs() {
  const faqs = document.querySelectorAll('.faq-item');
  faqs.forEach(faq => {
    faq.classList.toggle('active');
  });
}

// Support Ticket Form Validation
function validateTicketForm(event) {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    event.preventDefault(); // Prevent form submission
    alert('Please fill out all required fields.');
  }
}

// Scroll to Top Button Visibility
window.onscroll = function() {
  const scrollButton = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};

// Scroll to top functionality
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Dropdown Menu Functionality
document.querySelectorAll('.nav-links li').forEach(item => {
  item.addEventListener('mouseenter', () => {
    const dropdown = item.querySelector('.dropdown');
    if (dropdown) {
      dropdown.style.display = 'block';
    }
  });

  item.addEventListener('mouseleave', () => {
    const dropdown = item.querySelector('.dropdown');
    if (dropdown) {
      dropdown.style.display = 'none';
    }
  });
});

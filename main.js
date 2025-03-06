document.addEventListener('DOMContentLoaded', () => {
  // Back button functionality
  const backButton = document.querySelector('.back-button');
  if (backButton) {
    backButton.addEventListener('click', () => {
      window.history.back();
    });
  }

  // Hero title and description parallax effect
  window.addEventListener('scroll', () => {
    const heroTitle = document.querySelector('.hero-title');
    const heroDescription = document.querySelector('.hero-description');
    const scrolled = window.pageYOffset;
    
    heroTitle.style.transform = `translateY(${scrolled * 0.3}px)`;
    heroTitle.style.opacity = 0.9 - (scrolled * 0.003);
    
    heroDescription.style.transform = `translateY(${scrolled * 0.2}px)`;
    heroDescription.style.opacity = 0.9 - (scrolled * 0.003);
  });

  // Cards animation
  const cards = document.querySelectorAll('.card');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        cardObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    card.style.transitionDelay = `${index * 100}ms`;
    cardObserver.observe(card);
  });
});
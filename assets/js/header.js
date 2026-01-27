// Header section loader and navigation functionality

// Function to load header section
async function loadHeaderSection() {
  try {
    // Determine the correct path to header-section.html
    // Always fetch from site root
    const response = await fetch('/header-section.html');
    const html = await response.text();
    document.getElementById('header-container').innerHTML = html;
    // Re-initialize navigation after header is loaded
    initializeNavigation();
    return true;
  } catch (error) {
    console.error('Error loading header section:', error);
    document.getElementById('header-container').innerHTML = '<p>Header could not be loaded.</p>';
    return false;
  }
}

// Initialize navigation functionality
function initializeNavigation() {
  // Add click handler to portfolio nav link
  const portfolioNavLink = document.querySelector('a[href="#project"]');
  if (portfolioNavLink) {
    portfolioNavLink.addEventListener('click', handlePortfolioNavigation);
  }
  
  // Add smooth scrolling to all navigation links
  const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        
        // Update active state
        updateActiveNavigation(this);
        
        // Update URL hash
        window.history.pushState(null, null, '#' + targetId);
      }
    });
  });
}

// Update active navigation state
function updateActiveNavigation(activeLink) {
  // Remove active class from all nav items
  const navItems = document.querySelectorAll('.nav-menu li');
  navItems.forEach(item => item.classList.remove('active'));
  
  // Add active class to current nav item
  const parentLi = activeLink.closest('li');
  if (parentLi) {
    parentLi.classList.add('active');
  }
}

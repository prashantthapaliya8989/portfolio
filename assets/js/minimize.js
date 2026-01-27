// Minimize functionality for About section
let isMinimized = false;

function toggleMinimize() {
  const container = document.getElementById('about-container');
  const content = document.getElementById('about-content');
  const btn = document.getElementById('minimize-btn');
  
  if (!isMinimized) {
    // Minimize
    content.style.display = 'none';
    container.style.padding = '15px';
    container.style.width = '60px';
    container.style.height = '60px';
    container.style.borderRadius = '50%';
    btn.innerHTML = '+';
    btn.style.top = '300px';
    btn.style.right = '12px';
    btn.style.width = '30px';
    btn.style.height = '30px';
    btn.style.fontSize = '14px';
    isMinimized = true;
  } else {
    // Restore
    content.style.display = 'block';
    container.style.padding = '40px';
    container.style.width = 'auto';
    container.style.height = 'auto';
    container.style.borderRadius = '20px';
    btn.innerHTML = '−';
    btn.style.top = '15px';
    btn.style.right = '15px';
    btn.style.width = '35px';
    btn.style.height = '35px';
    btn.style.fontSize = '16px';
    isMinimized = false;
  }
}

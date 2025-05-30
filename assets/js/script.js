const range = document.getElementById('orderRange');
const orderCount = document.getElementById('orderCount');
const monthlyCost = document.getElementById('monthlyCost');
const mobileAppToggle = document.getElementById('mobileAppToggle');

function updatePricing() {
  const orders = parseInt(range.value);
  orderCount.value = orders;
  let cost = 0;
  if (orders <= 1000) cost = 5;
  else if (orders <= 5000) cost = 10;
  else if (orders <= 15000) cost = 25;
  else if (orders <= 50000) cost = 35;
  else if (orders <= 100000) cost = 50;
  else cost = 0; // Custom pricing

  if (mobileAppToggle.checked) {
    if (orders <= 1000) cost = 10;
    else if (orders <= 5000) cost = 20;
    else if (orders <= 15000) cost = 35;
    else if (orders <= 50000) cost = 50;
    else if (orders <= 100000) cost = 75;
    else cost = 0; // Custom pricing
  }

  monthlyCost.innerText = cost > 0 ? `$${cost}` : 'Custom';
}

range.addEventListener('input', updatePricing);
mobileAppToggle.addEventListener('change', updatePricing);
document.addEventListener('DOMContentLoaded', function() {
  var scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#features-list-scroll'
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop -20,
                  behavior: 'smooth'
              });
              
              // Update active nav link
              document.querySelectorAll('.nav-link').forEach(link => {
                  link.classList.remove('active');
              });
              this.classList.add('active');
          }
      });
  });
});
// aos
AOS.init();
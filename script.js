const navItems = document.querySelectorAll('.items');

navItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('starred');
  });
  
  item.addEventListener('mouseleave', () => {
    item.classList.remove('starred');
  });
});

  // Get all the main navigation items with class "main-nav"
const mainNavItems = document.querySelectorAll('.main-nav');

// Add an event listener to each main navigation item
mainNavItems.forEach((item) => {
  // Get the associated dropdown list for this item
  const dropdown = item.nextElementSibling;

  // Add event listeners to show/hide the dropdown on hover
  item.addEventListener('mouseover', () => {
    dropdown.classList.remove('hide');
  });

  item.addEventListener('mouseout', () => {
    dropdown.classList.add('hide');
  });

  dropdown.addEventListener('mouseover', () => {
    dropdown.classList.remove('hide');
  });

  dropdown.addEventListener('mouseout', () => {
    dropdown.classList.add('hide');
  });
});



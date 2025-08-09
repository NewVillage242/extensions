function removeElements() {
    // Remove promoted user and group for following and join.
    
    const navElement = document.querySelector('.NavAndContextualNav_nav__hp3Vb');
    console.log("init");
    toggle_visibility(navElement);
  }

function toggle_visibility(element) {
  if(!element) return;

  if(element.style.display === 'none' || getComputedStyle(element).display === 'none') {
    element.style.display = '';
  } else {
    element.style.display = 'none';
  }
}

function addHome() {
  const container = document.querySelector('.bb-that-header.bb-that--container');

  if (container) {
    // Create the <a> element
    const link = document.createElement('a');
    link.href = '/';
    link.textContent = 'B';
    link.style.color = 'white'; // example styling

    // Insert at the beginning
    container.prepend(link);
  }
}

removeElements();
addHome(); 
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
    link.classList.add("bb-that-header__link");
    link.style.color = 'white'; // example styling

    // Insert at the beginning
    container.prepend(link);
  }
}

function copyText() {
  const context = Array.from(
    document.querySelectorAll(".ArticleBodyText_articleBodyContent__17wqE")
  )
  .filter(p => !p.textContent.includes("Read More"))
  .map(p=>p.textContent).join("\n\n");

  navigator.clipboard.writeText(context)
    .then()
    .catch(err => console.error("Error copying: ", err));
}

function addCopy() {
  const container = document.querySelector('.bb-that-header.bb-that--container');
  if (container) {
    const button = document.createElement('button');
    button.textContent = 'Copy';
    button.classList.add("bb-that-header__link");
    button.style.color = "white";
    button.onclick = copyText();
    container.prepend(button);
  }
}

removeElements();
addHome(); 
addCopy();
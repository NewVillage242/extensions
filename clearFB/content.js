function removeElements() {
    // Remove promoted user and group for following and join.
    const elements = document.querySelectorAll('.x1fey0fg');
    let levelsUp = 26;
    elements.forEach(element => {
      if(element.innerHTML=="追蹤" || element.innerHTML=='加入'){
        for( let i=0; i < levelsUp; i++){
            if(element.parentElement){
                element = element.parentElement
            } else {
                break;
            }
        }
        element.style.display = 'none'
      }
    });

    // Remove short videos
    const candidates = document.querySelectorAll(".x193iq5w .xeuugli .x13faqbe")
    candidates.forEach(element =>{
      if(element.innerHTML=='連續短片和短片'){
        for(let i=0; i < 7; ++i){
            element = element.parentElement
        }
        element.style.display='none'
        console.log("block short video")
      }
    })
  }
  
  // Run once the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", removeElements);
  
  // Monitor for new elements being added
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      removeElements();
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
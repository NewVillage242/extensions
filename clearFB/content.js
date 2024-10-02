function removeElements() {
    // Remove promoted user and group for following and join.
    
    document.querySelectorAll('div .x1lliihq').forEach(post => {
      if (post.querySelector('.x1fey0fg')){
        post.style.display='none'
      }
    })

    // Remove short videos
    document.querySelectorAll(".x193iq5w .xeuugli .x13faqbe").forEach(element =>{
      if(element.innerHTML=='連續短片和短片'){
        for(let i=0; i < 7; ++i){
            element = element.parentElement
        }
        element.style.display='none'
        console.log("block short video")
      }
    })
    

    //Remove youtube short video and thread-like contents
    const short_elements = document.querySelectorAll('[modern-vwt-style][modern-vwt-style-v2]');
    short_elements.forEach(element => {
      element.style.display='none';
      console.log("block short video or thread-lik contents.")
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
  
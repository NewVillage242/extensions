function removeElements() {
    // Remove promoted user and group for following and join.
    
    document.querySelectorAll('div .x1lliihq').forEach(post => {
      if (post.querySelector('.x1fey0fg')){
        post.style.display='none'
      }
    })

    // Remove short videos
    document.querySelectorAll(".x193iq5w .xeuugli .x13faqbe").forEach(element =>{
      if(element.innerHTML=='Reel'){
        for(let i=0; i < 7; ++i){
            element = element.parentElement
        }
        element.style.display='none'
        console.log("block short video")
      }
    })
    

    // Instagram: Remove "Suggested for you" posts and hide the Reels tab
      // Hide "Suggested for you" feed posts
      document.querySelectorAll('article').forEach(article => {
        if (article.dataset.blocked) return;
        const divs = article.querySelectorAll('div');
        for (const div of divs) {
          if (div.textContent.trim() === 'Follow') {
            console.log("follow")
            // article.dataset.blocked = 'true';
            article.style.display = 'none';
            const parentDiv = article.closest('div');
            if (parentDiv) parentDiv.style.paddingBottom = '0';

            console.log("blocked Instagram suggested post");
            break;
          }
        }
      });

      // Hide the Reels tab in the navigation
      document.querySelectorAll('a[href="/reels/"]').forEach(el => {
        let parent = el;
        while (parent && parent.tagName !== 'LI') {
          parent = parent.parentElement;
        }
        const target = parent || el;
        target.style.display = 'none';
        console.log("hidden Instagram Reels tab");
      });
    
       // Hide the Explore tab in the navigation
      document.querySelectorAll('a[href="/explore/"]').forEach(el => {
        let parent = el;
        while (parent && parent.tagName !== 'LI') {
          parent = parent.parentElement;
        }
        const target = parent || el;
        target.style.display = 'none';
        console.log("hidden Instagram Explore tab");
      });
  }
  
  // Run once the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", removeElements);
  document.addEventListener("readystatechange", removeElements);

  // Monitor for new elements being added (debounced to reduce scroll jank)
  let removeTimer = null;
  const observer = new MutationObserver(() => {
    if (removeTimer) return;
    removeTimer = requestAnimationFrame(() => {
      removeElements();
      removeTimer = null;
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
function disableDockContainer() {
  const dockLink = document.getElementById("dock-container");
  if (dockLink) {
    dockLink.style.display = "none";
    dockLink.style.pointerEvents = "none"; // Disable clicks
    dockLink.style.opacity = "0.3"; // Optional: make it look disabled
    dockLink.href = "javascript:void(0)"; // Remove its navigation
  }
}

// Run once after page load
disableDockContainer();

// Run on scroll
window.addEventListener("scroll", disableDockContainer);

// Also observe for dynamically added elements
const observer = new MutationObserver(disableDockContainer);
observer.observe(document.body, { childList: true, subtree: true });

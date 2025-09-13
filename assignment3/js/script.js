const shareBtn = document.getElementById('shareBtn');
const shareStatus = document.getElementById('shareStatus');

shareBtn.addEventListener('click', async () => {
  const shareData = {
    title: "Wongai Hotel",
    text: "Check out wongai Hotel — Book now for a seaside escape!",
    url: ""
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      shareStatus.textContent = "Shared successfully!";
      shareStatus.style.color = "green";
    } catch (err) {
      shareStatus.textContent = "Sharing canceled.";
      shareStatus.style.color = "orange";
    }
  } else {
    shareStatus.textContent = "Sharing not supported on this browser.";
    shareStatus.style.color = "red";
  }
});



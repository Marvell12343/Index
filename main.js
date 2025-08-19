// All buttons go call the same Monetag ad function (show_9737351)

function showInterstitial() {
  try {
    if (typeof window.show_9737351 === 'function') {
      window.show_9737351();   // ✅ Show Ad
    } else {
      alert('Interstitial Ad no load yet.');
    }
  } catch (e) {
    alert('Error: ' + e.message);
  }
}

function showRewarded() {
  try {
    if (typeof window.show_9737351 === 'function') {
      window.show_9737351();   // ✅ Show Ad
    } else {
      alert('Rewarded Ad no load yet.');
    }
  } catch (e) {
    alert('Error: ' + e.message);
  }
}

function showPopup() {
  try {
    if (typeof window.show_9737351 === 'function') {
      window.show_9737351();   // ✅ Show Ad
    } else {
      alert('Popup Ad no load yet.');
    }
  } catch (e) {
    alert('Error: ' + e.message);
  }
}

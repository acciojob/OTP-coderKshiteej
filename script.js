//your JS code here. If required.
const codes = document.querySelectorAll('.code');

// Automatically focus on the first input on page load
codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener('input', (e) => {
    const value = e.target.value;

    // Allow only one digit
    if (value.length > 1) {
      e.target.value = value.charAt(0);
    }

    // Move to next input automatically
    if (value && idx < codes.length - 1) {
      codes[idx + 1].focus();
    }
  });

  code.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (e.target.value === '') {
        // Move focus back and clear previous
        if (idx > 0) {
          codes[idx - 1].focus();
          codes[idx - 1].value = '';
        }
      } else {
        // Clear current field
        e.target.value = '';
      }
    }
  });
});

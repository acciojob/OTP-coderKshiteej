const inputs = document.querySelectorAll('.code');

// Focus on first input when page loads
window.addEventListener('DOMContentLoaded', () => {
  inputs[0].focus();
});

// For each input field
inputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    const value = e.target.value;
    if (value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus(); // move to next input
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      inputs[index - 1].focus(); // move to previous input
      inputs[index - 1].value = ''; // clear previous
    }
  });
});

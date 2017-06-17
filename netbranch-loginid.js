document.body.querySelectorAll('input[type="password"][name*="LoginID"]').forEach((input) => {
  input.setAttribute('type', 'text');
});

window.addEventListener('hashchange', handleHashChange);
handleHashChange();

function handleHashChange() {
  const { hash } = location;
  alert(hash);
}

window.addEventListener('focus', () => {
  alert('focus');
});
window.addEventListener('blur', () => {
  alert('blur');
});

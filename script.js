function showSection(id) {
  document.querySelectorAll('.proj-section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
window.addEventListener('DOMContentLoaded', function() {
  const content = document.getElementById('post_content');

  content.addEventListener('keyup', function() {
    let count = this.value.length;
    document.querySelector('#show-count-text').innerText = count;
  }, false);

  content.addEventListener('blur', function() {
    let count = this.value.length;
    document.querySelector('#show-count-text').innerText = count;
  }, false);
}, false);

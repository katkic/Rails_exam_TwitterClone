window.addEventListener('DOMContentLoaded', function() {
  const content = document.querySelector('#post_content');
  const countText = document.querySelector('#show-count-text')
  countText.innerText = content.value.replace(/\n/g, '\r\n').length;

  content.addEventListener('input', function() {
    let count = this.value.replace(/\n/g, '\r\n').length;
    countText.innerText = count;
  }, false);
}, false);

$(function(){
  

  let length = window.messages.length;
  let el = '';
  const obj = window.messages;
  for (var i in obj) {
    el += '<li>';
    el += '<time>' + obj[i]['date'] + '</time>';
    
    switch (obj[i]['type']) {
      case 'warning':
        el += ' <em>[' + obj[i]['type'] + ']</em>';
        break;
      case 'error':
        el += ' <strong>[' + obj[i]['type'] + ']</strong>';
        break;
      case 'info':
        el += ' <span>[' + obj[i]['type'] + ']</span>';
        break;
    }

    el += '<span>' + obj[i]['text'] + '</span>';
    el += '</li>';
  }
  $('body').prepend(el);
});

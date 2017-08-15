var example1 = new Vue({
    el: '#ex-1',
    data: {
      timer: '' + new Date()
    }
});

var example2 = new Vue({
  el: '#ex-2',
  data: {
    message: 'This page is loaded at ' + new Date()
  }
});

var example3 = new Vue({
  el: '#ex-3',
  data: {
    show: true
  }
});

setInterval(function() {
  example1.timer = '' + new Date();
}, 1000);

document.getElementById('show-button').addEventListener('click', function() {
  example3.show = !example3.show;
});

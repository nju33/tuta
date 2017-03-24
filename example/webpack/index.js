import Tuta from '../..';

(function () {
  new Tuta({
    target: document.getElementById('icon-right'),
    data: {
      onSubmit() {
        console.log('args', arguments);
        arguments[2]();
      }
    }
  });
  new Tuta({
    target: document.getElementById('icon-left'),
    data: {
      icon: '<svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475.084 475.084" enable-background="new 0 0 475.084 475.084"><path d="M464.5 412.8l-98-98C390.3 281 402 243 402 201c0-27.2-5.3-53.2-16-78-10.4-25-24.7-46.3-42.7-64.3-18-18-39.4-32.3-64.2-43C254.3 5.4 228.3 0 201 0c-27.2 0-53.2 5.3-78 15.8-25 10.6-46.3 25-64.3 43s-32.3 39.3-43 64C5.4 148 0 174 0 201c0 27.2 5.3 53.2 15.8 78 10.6 25 25 46.3 43 64.3s39.3 32.3 64 43c25 10.4 51 15.7 78.2 15.7 42 0 80-11.8 114-35.4l97.8 97.6c7 7.3 15.5 11 25.7 11 10 0 18.5-3.7 25.7-11 7.3-7.2 11-15.8 11-25.7 0-10-3.6-18.6-10.7-25.7zm-173-121.4C266.2 316.4 236 329 201 329s-65.3-12.6-90.4-37.6c-25-25-37.5-55.2-37.5-90.4s12.6-65.3 37.6-90.4c25-25 55.2-37.5 90.4-37.5s65.3 12.6 90.4 37.6c25 25 37.5 55.2 37.5 90.4s-12.6 65.3-37.6 90.4z"/></svg>',
      iconPosition: 'left',
      onSubmit() {
        console.log('args', arguments);
        arguments[2]();
      }
    }
  });
})();

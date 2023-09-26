import Menu from "./components/menu";
import Tabs from "./components/tabs";
import Sliders from './components/sliders';

window.addEventListener("load", function () {
  new Sliders;
  new Menu;
  new Tabs;

  /*let container = document.querySelector(".containerMin");
  let domRect;
  let result;
  let box = document.querySelectorAll(".geography-box");
  let nav = document.querySelectorAll(".geography-nav");

  if (container) {
    domRect = container.getBoundingClientRect();
    if (window.innerWidth > 768) {
      result = domRect.left + 50;
    } else if (window.innerWidth > 375) {
      result = domRect.left + 30;
    } else {
      result = domRect.left + 12;
    }
  }

  box?.forEach(function (el) {
    el.style.left = '' + result + 'px';
  });

  nav?.forEach(function (el) {
    el.style.left = '' + result + 'px';
  });

  if (window.innerWidth <= 992) {
    box?.forEach(function (el) {
      el.style.right = '' + result + 'px';
    });
    nav?.forEach(function (el) {
      el.style.right = '' + result + 'px';
    });
  }

  window.addEventListener('resize', function () {
    box?.forEach(function (el) {
      el.style.left = '' + result + 'px';
    });
    nav?.forEach(function (el) {
      el.style.left = '' + result + 'px';
    });
    if (window.innerWidth <= 992) {
      box?.forEach(function (el) {
        el.style.right = '' + result + 'px';
      });
      nav?.forEach(function (el) {
        el.style.right = '' + result + 'px';
      });
    }
  });*/
});

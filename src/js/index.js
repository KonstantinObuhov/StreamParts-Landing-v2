// import 'jquery';

import "./components/fullpage4/dist/fullpage.js";
import "./components/fullpage4/dist/fullpage.css";
import Menu from "./components/menu";
import Tabs from "./components/tabs";
import Sliders from './components/sliders';
// import 'select2/dist/js/select2';

window.addEventListener("load", function () {

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  new Menu;
  new Tabs;

  var container = document.querySelector(".containerMin");
  var domRect
  var result
  let box = document.querySelectorAll(".geographySlider__box");
  let nav = document.querySelectorAll(".geographySlider__nav");
  if (container){
      domRect = container.getBoundingClientRect(); 
      if(window.innerWidth > 768){
        result = domRect.left + 50;
      }
      else if(window.innerWidth > 375){
        result = domRect.left + 30;
      }
      else{
        result = domRect.left + 12;
      }
      
  }    
  box?.forEach(function(el){
      el.style.left = ''+ result +'px';
  });
  nav?.forEach(function(el){
      el.style.left = ''+ result +'px';
  });
  if (window.innerWidth <= 992) {
      box?.forEach(function(el){
          el.style.right = ''+ result +'px';
      });
      nav?.forEach(function(el){
          el.style.right = ''+ result +'px';
      });
  }
  window.addEventListener('resize', function() {
    box?.forEach(function(el){
      el.style.left = ''+ result +'px';
    });
    nav?.forEach(function(el){
        el.style.left = ''+ result +'px';
    });
    if (window.innerWidth <= 992) {
      box?.forEach(function(el){
          el.style.right = ''+ result +'px';
      });
      nav?.forEach(function(el){
          el.style.right = ''+ result +'px';
      });
    }
  });

  function formatState (state) {
    if (!state.id) {
      return state.text;
    }
    var baseUrl = $(state.element).data('image'); ;
    var $state = $(
      '<img src="' + baseUrl + '" class="w-[24px] h-[24px] mr-[8px] object-contain pointer-events-none" /> <div class="leading-7 text-left pointer-events-none">' + state.text + '</div>'
    );
    return $state;
  };
  if(window.innerWidth < 640){
    $('.select').select2({
      minimumResultsForSearch : Infinity,
      templateResult: formatState,
      templateSelection:formatState,
    });
    $('.select').on("select2:select", function(e) { 
      let getVal = e.target.value;
      console.log(getVal);
      let content = document.querySelectorAll(".tab-content");
      content.forEach(function(item){
        let id = item.getAttribute("id");
        if(id == getVal){
          document.querySelector(".tab-content.current").classList.remove('current');
          item.classList.add('current');
        }

      })
      
   });
  }
  if(document.title == 'Главная'){
    $('#index').addClass('active');
    $('#indexFooter').addClass('active');
    $('#indexMobile').addClass('active');
  }
  else if(document.title == 'О компании'){
    $('#about').addClass('active');
    $('#aboutFooter').addClass('active');
    $('#aboutMobile').addClass('active');
  }
});

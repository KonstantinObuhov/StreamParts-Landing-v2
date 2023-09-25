import Menu from "./components/menu";
import Tabs from "./components/tabs";
import sliders from './components/sliders';
import $ from 'jquery';
import select2 from "select2";

select2($);
window.$ = window.jQuery = $;

window.addEventListener("load", function () {
  sliders();
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
  let box = document.querySelectorAll(".geography-box");
  let nav = document.querySelectorAll(".geography-nav");
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
    let template = $($(`[data-template="${state.id}"]`).html());
    return template;
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

});

import select2 from "select2";
import $ from "jquery";

select2($);
window.$ = window.jQuery = $;

const TAB_NAV_LIST_CLASS = 'tab-nav-items';
const TAB_NAV_CLASS = 'tab-nav-item';
const TAB_CONTENT_CLASS = 'tab-content';

export default class Tabs {
  constructor(tabNavClass = TAB_NAV_CLASS, tabNavListClass = TAB_NAV_LIST_CLASS, tabContentClass = TAB_CONTENT_CLASS) {
    this.tabsNavItems = document.getElementsByClassName(tabNavClass);
    this.tabNavList = document.getElementsByClassName(tabNavListClass);
    this.tabsContentItems = document.getElementsByClassName(tabContentClass);
    this.handleClickOnTabs();
    if (window.innerWidth < 640) {
      this.initSelectForTabs();
    }
  }

  handleClickOnTabs() {
    for (let tabsNavItem of this.tabsNavItems) {
      tabsNavItem.addEventListener('click', (event) => {
        this.switchTab(event.target);
      });
    }
  }

  switchTab(tab) {
    let activeTabId = tab.getAttribute('data-tab');
    for (let tabsNavItem of this.tabsNavItems) {
      tabsNavItem.classList.remove('active');
    }
    for (let tabsContentItem of this.tabsContentItems) {
      if (tabsContentItem.id === activeTabId) {
        tabsContentItem.classList.add('current');

      } else {
        tabsContentItem.classList.remove('current');
      }
    }
    tab.classList.add('active');
    this.tabNavList[0].classList.toggle('expanded');
  }

  initSelectForTabs() {
    let $selects = $('.select');

    $selects.select2({
      minimumResultsForSearch: Infinity,
      templateResult: this.getSelectViewTemplate,
      templateSelection: this.getSelectViewTemplate,
    });

    $selects.on("select2:select", function (e) {
      let value = e.target.value;
      let content = document.querySelectorAll(".tab-content");
      content.forEach(function (item) {
        let id = item.getAttribute("id");
        if (id === value) {
          document.querySelector(".tab-content.current").classList.remove('current');
          item.classList.add('current');
        }
      });
    });
  }

  getSelectViewTemplate(state) {
    if (!state.id) {
      return state.text;
    }
    return $($(`[data-template="${state.id}"]`).html());
  }
};

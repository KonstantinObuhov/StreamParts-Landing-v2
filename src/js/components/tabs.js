const TAB_NAV_LIST_CLASS = 'tab-nav-items';
const TAB_NAV_CLASS = 'tab-nav-item';
const TAB_CONTENT_CLASS = 'tab-content';

export default class Tabs {
    constructor (tabNavClass = TAB_NAV_CLASS, tabNavListClass = TAB_NAV_LIST_CLASS, tabContentClass = TAB_CONTENT_CLASS) {
        this.tabsNavItems = document.getElementsByClassName(tabNavClass);
        this.tabNavList = document.getElementsByClassName(tabNavListClass);
        this.tabsContentItems = document.getElementsByClassName(tabContentClass);
        this.handleClickOnTabs();
    }
    handleClickOnTabs() {
        for (let tabsNavItem of this.tabsNavItems) {
            tabsNavItem.addEventListener('click', (event) => {
                this.switchTab(event.target);
                // console.log(event.target);
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
};

// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: theme,
  data: function () {
    return {
      photos: [
        {
          url: 'depictions/testdepiction/screenshots/testshot1.jpg',
          caption: 'Test caption'
        },
        {
          url: 'depictions/testdepiction/screenshots/testshot2.jpg',
          caption: 'Test caption'
        },
        {
          url: 'depictions/testdepiction/screenshots/testshot3.jpg',
          caption: 'Test caption'
        }
      ],
    }
  },
  methods: {
    openStandalone: function () {
      const self = this;
      self.standalone.open();
    },
    openPopup: function () {
      const self = this;
      self.popup.open();
    },
    openPage: function () {
      const self = this;
      self.page.open();
    },
    openStandaloneDark: function () {
      const self = this;
      self.standaloneDark.open();
    },
    openPopupDark: function () {
      const self = this;
      self.popupDark.open();
    },
    openPageDark: function () {
      const self = this;
      self.pageDark.open();
    },
  },
  on: {
    pageInit: function () {
      const self = this;
      // Create PBs when page init
      self.standalone = self.$app.photoBrowser.create({
        photos: self.photos,
      });
      self.popup = self.$app.photoBrowser.create({
        photos: self.photos,
        type: 'popup',
      });
      self.page = self.$app.photoBrowser.create({
        photos: self.photos,
        type: 'page',
        backLinkText: 'Back',
      });
      self.standaloneDark = self.$app.photoBrowser.create({
        photos: self.photos,
        theme: 'dark',
      });
      self.popupDark = self.$app.photoBrowser.create({
        photos: self.photos,
        type: 'popup',
        theme: 'dark',
      });
      self.pageDark = self.$app.photoBrowser.create({
        photos: self.photos,
        type: 'page',
        backLinkText: 'Back',
        theme: 'dark',
      });
    },
    pageBeforeRemove: function () {
      const self = this;
      // Destroy PBs on page remove
      self.standalone.destroy();
      self.popup.destroy();
      self.page.destroy();
      self.standaloneDark.destroy();
      self.popupDark.destroy();
      self.pageDark.destroy();
    },
  }
});
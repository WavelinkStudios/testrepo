var routes = [
  // Index page
  {
    path: '/',
    componentUrl: './index.html',
    name: 'home',
  },
  // BIDsXI depiction
  {
    path: '/bidsxi/',
    componentUrl: './depictions/com.wavelink.bundleidsxi/bidsxi.html',
    name: 'bidsxi',
    routes: [
      {
        path: 'changes/',
        url: './depictions/com.wavelink.bundleidsxi/changelog.html',
      },
    ],
  },
  // Test Package depiction
  {
    path: '/testdepiction/',
    componentUrl: './depictions/testdepiction/testdepiction.html',
    name: 'testdepic',
    routes: [
      {
        path: 'changes/',
        url: './depictions/testdepiction/changelog.html',
      },
    ],
  },
  // Example Package depiction
  {
    path: '/exampledepiction/',
    componentUrl: './depictions/exampledepiction/exampledepiction.html',
    name: 'exampdepic',
    routes: [
      {
        path: 'changes/',
        url: './depictions/exampledepiction/changelog.html',
      },
    ],
  },
  // All Packages page
  {
    path: '/allpackages/',
    url: './pages/allpackages.html',
    name: 'allpackages',
  },

  // Color Themes
  {
    path: '/color-themes/',
    componentUrl: './pages/color-themes.html',
  },

  // Page Loaders
  {
    path: '/page-loader-template7/:user/:userId/:posts/:postId/',
    templateUrl: './pages/page-loader-template7.html',
    // additional context
    options: {
      context: {
        foo: 'bar',
      },
    },
  },
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './pages/page-loader-component.html',
    // additional context
    options: {
      context: {
        foo: 'bar',
      },
    },
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];

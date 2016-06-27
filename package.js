Package.describe({
  name: 'aosman:orion-crop',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'a tool for adding crop functionality to orion:image-attribute',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/aosmn/orion-crop',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});
Package.onUse(function(api) {
  api.versionsFrom('1.3.4.1');
  api.use('templating');
  api.use('session');
  api.use(["orionjs:core@1.8.0"]);
  api.use(["orionjs:materialize@1.8.0"]);
  api.use(["orionjs:file-attribute@1.8.0"]);
  api.use(["orionjs:image-attribute@1.8.0"],{unordered: false});
  api.use(["vsivsi:orion-file-collection@0.2.4"]);
  api.use(["jonblum:jquery-cropper@2.3.0"]);
  api.use(["nicolaslopezj:reactive-templates@1.2.1"]);

  api.add_files("orion-crop.html");
  api.add_files("orion-crop.js", "client");
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');

  api.use('aosman:orion-crop');
  api.mainModule('orion-crop-tests.js');
});

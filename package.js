Package.describe({
  name: 'aosman:orion-crop',
  version: '0.0.1',
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
  api.use('ecmascript');
  api.use('templating');
  api.use('session',{unordered: false});
  //api.use(["aldeed:tabular"]);
  api.use(["orionjs:core"]);
  api.use(["orionjs:materialize"]);
  api.use(["orionjs:file-attribute"]);
  api.use(["orionjs:image-attribute"],{unordered: false});
  api.use(["vsivsi:orion-file-collection"]);
  api.use(["iron:router"]);
  api.use(["jonblum:jquery-cropper"]);
  //api.use(["materialize:materialize"]);
  api.use(["nicolaslopezj:reactive-templates"]);
  
  api.add_files("orion-crop.html");
  api.add_files("orion-crop.js", "client");
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');

  api.use('aosman:orion-crop');
  api.mainModule('orion-crop-tests.js');
});

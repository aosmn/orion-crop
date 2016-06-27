// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by orion-crop.js.
import { name as packageName } from "meteor/aosman:orion-crop";

// Write your tests here!
// Here is an example.
Tinytest.add('orion-crop - example', function (test) {
  test.equal(packageName, "orion-crop");
});

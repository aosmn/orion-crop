# Orion Crop
Meteor Package that overrides Orion's orion:image-attribute and adds cropping functionality to it
using jonblum:jquery-cropper

# Installation
```js
meteor add aosman:orion-crop
```

# Usage
Just add an autoform attribute to your form

```js
{{> afQuickField name='image' label='photo' cropRatio="0"}}
```
'cropRatio' (optional) define aspect ratio of the crop area

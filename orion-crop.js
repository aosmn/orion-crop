Session.set('cropSwitch',true);

ReactiveTemplates.events("attribute.image", {
  'click .crop': function(){
    if(Session.get('cropSwitch')){
      $("#croppedImg").cropper({
        aspectRatio: eval(this.atts.cropRatio)
      });

      Session.set('cropSwitch',!Session.get('cropSwitch'));
      $(".crop").html("save");
      $("#saving").hide();
    }
    else{
      // UPDATE URL FOR UPLOADED IMAGE
      Session.set('cropCanvas',$("#croppedImg").cropper('getCroppedCanvas').toDataURL('image/jpeg'));

      // CHECK IF CROP CANVAS IS CHANGED TO SHOW SAVING PROGRESS
      if($("#croppedImg").cropper('getCroppedCanvas').toDataURL('image/jpeg')!=Session.get('previousCanvasData')){
        Session.set('previousCanvasData',$("#croppedImg").cropper('getCroppedCanvas').toDataURL('image/jpeg'));
        $("#saving").show();
      }
    }
  },
  // OVERRIDING CHANGE INPUT EVENT OF ORION IMAGE-ATTRIBUTE
  'change input': function(event, template) {
    if (orion.filesystem.isUploading()) return;

    var self = this;
    var files = event.currentTarget.files;
    if (files.length != 1) return;

    orion.helpers.getBase64Image(files[0], function(base64) {
      Session.set('image_base64' + self.name, base64);


      var upload = orion.filesystem.upload({
        fileList: files,
        name: files[0].name,
        uploader: 'image-attribute'
      });

      Session.set('isUploading' + self.name, true);
      Session.set('uploadProgress' + self.name, 1);

      Tracker.autorun(function () {
        if (upload.ready()) {
          if (upload.error) {
            Session.set('image' + self.name, null);
            console.log(upload.error);
            alert(upload.error.reason);
          } else {
            var information = orion.helpers.analizeColorFromBase64(base64);
            Session.set('image' + self.name, {
              fileId: upload.fileId,
              url: Session.get('cropCanvas'), // UPLOAD URL CHANGED HERE
              info: information
            });
            $("#saving").hide();
          }
          Session.set('isUploading' + self.name, false);
        }
      });
      Tracker.autorun(function () {
        Session.set('uploadProgress' + self.name, upload.progress());
      });
    });
  }
});

// OVERRIDING ORION IMAGE-ATTRIBUT TEMPLATE
ReactiveTemplates.set('attribute.image', 'orionImageCrop');

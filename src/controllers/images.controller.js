"use strict";
// Images Controller
function ImagesController() {
  this.$addImage = $("#add_image");
  this.$imageTitleInput = $("#image_title");
  this.$imageUrlInput = $("#image_url");
  this.$selectImageMenu = $("#select_image");
  this.$addCommentForm = $("#add-comment");
  this.$wrapper = $("#wrapper");
}

ImagesController.prototype.hideCommentForm = function() {
  this.$addCommentForm.hide(); // initially hide add comment form
};

ImagesController.prototype.destroyImageLiveEventListener = function() {
  var self = this;
  this.$wrapper.on("click", ".destroy-image", function() {
    //live event imageener
    var imageId = parseInt(
      $(this)
        .parents("h2")
        .next("ul")
        .data("id")
    );
    Image.all.splice(imageId, 1, null);
    self.$selectImageMenu.find('option[value="' + imageId + '"]').remove();
    $(this)
      .parents(".image")
      .remove();
  });
};
//Defines render function, which determines where to render
//the contents of the imageEl function 
ImagesController.render = function(image) {
  $("#images").append(image.imageEl());
};

//Initiates the 
ImagesController.prototype.init = function() {
  this.hideCommentForm();
  this.destroyImageLiveEventListener();
  Image.load();
};

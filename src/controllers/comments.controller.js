class CommentsController {
  constructor() {
    this.$addCommentForm = $(".add-comment");
    this.$submitComment = $(".submit");
    this.$userText = $(".user-text");
  }

  init() {
    // kick off controller from here
    this.addCommentFormListener();
  }

  addCommentFormListener() {
    this.$submitComment.on("click", event => {
      event.preventDefault();
      let id = event.target.id;
      let comment = this.$userText[id].value;
      let imageID = `image-${id}`
      let commentNew = new Comment(comment, imageID);
      //find image ID - set same as input ID
      
      this.render(comment, id);
      document.getElementById("add-comment").reset();
    });
  }

  render(comment, id) {
    //select correct ul
    $(`#comments-${id}`).append(`<li id="newComm-${id}">${comment}</li>`)
  }
}

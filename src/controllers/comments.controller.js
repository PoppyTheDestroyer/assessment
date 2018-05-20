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
      let commentNew = new Comment(id, comment);
      //find image ID - set same as input ID
      let imageID = `image-${id}`
      this.render(comment, id);
      document.getElementById("add-comment").reset();
    });
  }

  render(comment, id) {
    //select correct ul
    $(`#comments-${id}`).append(`<li>${comment}</li>`)
  }
}

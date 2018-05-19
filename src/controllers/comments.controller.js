class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment');
    this.$submitComment = $("#submit");
    this.$userText = $(".user-text");
  }

  init() {
    // kick off controller from here
    this.$addCommentForm.on("submit", this.addCommentFormListener)
  }

  addCommentFormListener(e) {
    e.preventDefault();
    console.log("OK");

  }
}

class CommentsController {
  constructor() {
    this.$submitComment = $(".submit");
    this.$userText = $(".user-text");
  }

  init() {
    // kick off controller from here
    this.addCommentFormListener();
  }

  addCommentFormListener() {
    //add event listener to all forms based on their class
    this.$submitComment.on("click", event => {
      event.preventDefault();
      //capture numerical id to use in comment variable to catch correct comment value
      let id = event.target.id;
      // console.log(event.target);
      let comment = this.$userText[id].value;
      //find image ID - set same as input ID
      let imageID = `image-${id}`;
      //Create new Comment using Comment Constructor with the 
      //comment and id variables as arguments
      let commentNew = new Comment(comment, id);
      // console.log(commentNew);
      this.render(commentNew);
      //Resets form after submission
      document.getElementById(`add-comment-${id}`).reset();
    });
  }

  render(commentNew) {
    //variable for correct ul
    let list = `#comments-${commentNew.$id}`;
    //variable sets up commentEl function with the new Comment,
    //creating the new li
    let listComment = commentNew.commentEl();
    // console.log(list, listComment);
    //finally adds new li to the correct ul, which appears on the page
    $(list).append(listComment);
  }
}

class CommentsController {
    constructor() {
      this.$submitComment = $(".submit");
      this.$userText = $(".user-text");
      this.$allComments = $(".all-comments");
    }
  
    init() {
      // kick off controller from here
      this.addCommentFormListener();
    }
  
    addCommentFormListener() {
      //add event listener to all forms
      this.$submitComment.on("click", event => {
        event.preventDefault();
        //capture numerical id to use in comment variable to catch correct comment value
        let id = event.target.id;
        let comment = this.$userText[id].value;
        //find image ID - set same as input ID
        let imageID = `image-${id}`;
        let commentNew = new Comment(comment, id);
        //console.log(commentNew);
        this.render(commentNew);
        document.getElementById(`add-comment-${id}`).reset();
      });
    }
  
    render(commentNew) {
      //variable for correct ul
      let list = `#comments-${commentNew.$id}`;
      //variable sets up commentEl function with new Comment
      let listComment = commentNew.commentEl(commentNew.id, commentNew.comment);
      //console.log(list, listComment);
      //finally calls commentEl function with correct ul and posts comment as li
      $(list).append(listComment);
    }
  }

  // create Comment class here
class Comment {
    constructor(comment, id) {
      this.$comment = comment;
      this.$id = id;
  
      this.findImage(comment, id);
      this.commentEl(comment, id);
      this.all();
    }
  
    findImage(comment, id) {
      //find image object from image.js
      let commArray = Image.all[id].comments;
      //push comment into object
      commArray.push(comment);
      return Image.all[id];
    }
  
    commentEl(comment, id) {
      return `<li id="newComm-${this.$id}">${this.$comment}</li>`;
    }
    //push new Comment into allComment array
    all() {
      this.constructor.allComments.push(this);
      //console.log(this.constructor.allComments);
    }
  }
  
  Comment.allComments = [];
  
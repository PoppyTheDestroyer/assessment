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

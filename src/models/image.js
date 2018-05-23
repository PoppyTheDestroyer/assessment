'use strict';
// ImageModel

function Image(title, url) {
  this.id = this.constructor.all.length;
  this.title = title;
  this.url = url;
  this.comments = [];
  this.constructor.all.push(this);
}

Image.prototype.imageEl = function() {
  return `<div class="image">
  <label for="comment-description-${this.id}" class="image-group">
    <h5><button class="destroy-image btn btn-primary">&times;</button><strong>${this.title}</strong></h5>
    <ul id="image-${this.id}" data-id="${this.id}">
      <img src="${this.url}"></img>
      <ul id="comments-${this.id}"></ul>
      <form id="add-comment-${this.id}" class="add-comment" data-id=${this.id} action="#" method="post">
        <label class="comment-label" for="comment-description-${this.id}">Comment: </label>
        <input type="text" id="comment-description-${this.id}" class="user-text" name="comment-description-${this.id}" placeholder="comment">
        <input id="${this.id}" class="submit btn btn-primary" type="submit" value="(+) add comment">
      </form>
    </ul>
  </label>
</div>`;
};

Image.load = function() {
  Image.defaults.map(function(image){
    var newImage = new Image(image.title, image.url)
    ImagesController.render(newImage)
    //remove comment out to demonstrate findImage()
    //console.log(Image.all);
  })
}

Image.all = [];
Image.defaults = [
  {
    title: 'The Perfect Date',
    url: 'https://s3.amazonaws.com/learn-verified/perfectDate.png'
  },
  {
    title: 'Back-end v. Front-end',
    url: 'https://s3.amazonaws.com/learn-verified/backVFront.jpg'
  },
  {
    title: 'Good Programmer',
    url: 'https://s3.amazonaws.com/learn-verified/goodProgrammer.png'
  },
  {
    title: 'Need Snek',
    url: 'https://s3.amazonaws.com/learn-verified/needSnekToRun.jpeg'
  },
  {
    title: 'Risky Captcha',
    url: 'https://s3.amazonaws.com/learn-verified/hopeThisDoesntDoDmg.jpg'
  },
  {
    title: 'Amazon Sync Loader',
    url: 'https://s3.amazonaws.com/learn-verified/syncingByAmazon.gif'
  },
  {
    title: 'Just Kidding',
    url: 'https://s3.amazonaws.com/learn-verified/woopsNevermind.png'
  },
  {
    title: 'Assembly v. The World',
    url: 'https://s3.amazonaws.com/learn-verified/divideBy10.png'
  },
  {
    title: 'WaffleBoard',
    url: 'https://s3.amazonaws.com/learn-verified/waffleBoard.png'
  },
  {
    title: 'The Bat Strikes Again',
    url: 'https://s3.amazonaws.com/learn-verified/NaNx10Batman.png'
  }
];

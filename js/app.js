
var  initialCats = [
        {
          name: 'Stormy',
          imgSrc: "img/cat1.jpg",
          clickCount: 0,
          nickName: ["cocoPuff", "coolguy", "twoface"]
        },
        {
          name: 'Two Face',
          imgSrc: "img/cat2.jpg",
          clickCount: 0,
          nickName: ["cocoPuff", "coolguy", "twoface"]
        },
        {
          name: 'Cuddle Buddies',
          imgSrc: "img/cat3.jpg",
          clickCount: 0,
          nickName: ["cocoPuff", "coolguy", "twoface"]
        },
        {
          name: 'Coco',
          imgSrc: "img/cat4.jpg",
          clickCount: 0,
          nickName: ["cocoPuff", "coolguy", "twoface"]
        },
        {
          name: 'Goose',
          imgSrc: "img/cat5.jpg",
          clickCount: 0,
          nickName: ["cocoPuff", "coolguy", "twoface"]
        }
    ]





var Cat = function(data){

      this.clickCount = ko.observable(data.clickCount)
      this.name = ko.observable(data.name)
      this.imgSrc = ko.observable(data.imgSrc)
      this.nickName = ko.observableArray(data.nickName)

  this.lifeStage = ko.computed(function(){

    if(this.clickCount() < 10){
      return "baby"
    }
    else {
      return "teenager"
    }

  }, this)



}

var ViewModel = function(){
    var self = this

    this.catList = ko.observableArray([])

    initialCats.forEach(function(catItem){
      self.catList.push(new Cat(catItem) )
    })

    this.currentCat = ko.observable( this.catList()[0] );

    this.incrementCounter = function() {
      self.currentCat().clickCount(self.currentCat().clickCount() + 1)
    }

    this.setCat = function(clickedCat){
      self.currentCat(clickedCat)
    }




}

ko.applyBindings(new ViewModel())

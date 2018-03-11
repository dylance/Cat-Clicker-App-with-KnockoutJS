var Cat = function(){

      this.clickCount = ko.observable(0)
      this.name = ko.observable('Stormy')
      this.imgSrc = ko.observable('img/cat1.jpg')
      this.nickName = ko.observableArray([
        "cocoPuff", "coolguy", "twoface"
  ])

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

    this.currentCat = ko.observable(new Cat())

    this.incrementCounter = function() {
      this.currentCat().clickCount(this.currentCat().clickCount() + 1)
    }






}

ko.applyBindings(new ViewModel())

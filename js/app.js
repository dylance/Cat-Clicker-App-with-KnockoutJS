var ViewModel = function(){
    this.clickCount = ko.observable(0)
    this.name = ko.observable('Stormy')
    this.imgSrc = ko.observable('img/cat1.jpg')

    this.incrementCounter = function() {
      this.clickCount(this.clickCount() + 1)
    }

    this.lifeStage = ko.computed(function(){

      if(this.clickCount() < 10){
        return "baby"
      }
      else {
        return "teenager"
      }

    }, this)

    


}

ko.applyBindings(new ViewModel())

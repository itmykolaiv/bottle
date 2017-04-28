
var Bottle = function() {
    this.water = 700;
    this.cap = Math.random()*10>=5?0:1;
    
    var setCap = function setCap() {
        document.querySelector('.cap').setAttribute('class','cap ' + (this.cap?'closed':'open'));
    }

    this.openButtle = function(){
        this.cap = 0;
        setCap.call(this);
    };
    
    this.closeButtle = function(){
        this.cap = 1;
        setCap.call(this);
    };

    this.pourWater = function(glass){
        if(this.cap) {
            return false;
        }
        document.querySelector('.bottle').setAttribute('class','bottle pour');
        this.water-=10;
        try {
            glass.getWater(10);
        } catch(e) {
            console.log('there no glass!');
        }
        var opacity = this.water/700;
        setWoterView(opacity);
        setTimeout(function(){
            document.querySelector('.bottle').setAttribute('class','bottle');
        },3500);
    };

    var setWoterView = function(opacity) {
        setTimeout(function(){
            document.querySelector('.bottle path:nth-child(2)').style.opacity = opacity;
        },200);
    }


    setCap.call(this);
};

var Glass = function() {
    this.position = Math.random()*10>=5?0:1; 
    this.water = 0;

    var setGlass = function setGlass() {
        document.querySelector('.glass').setAttribute('class','glass ' + (this.position?'normal':'rotated'));
    }

    this.rotateGlass = function(){
        this.position = !this.position;
        setGlass.call(this);
    };
    this.getWater = function(water_count){
        if(!water_count || !this.position ) {
            return;
        }
        document.querySelector('.glass').setAttribute('class','glass fill');
        this.water += water_count;
        var opacity = this.water/200;
        setWoterView(opacity);
        setTimeout(function(){
            document.querySelector('.glass').setAttribute('class','glass');
        },3500);
    };
    var setWoterView = function(opacity) {
        setTimeout(function(){
            document.querySelector('.glass path:nth-child(2)').style.opacity = opacity;
        },200);
    }
    setGlass.call(this);
};
class Shape{
    constructor(text, textColor, shapeColor){
        this.text=text
        this.textColor=textColor
        this.shapeColor=shapeColor
    }
    render(){
        return new Error("deligate to child to create logo shape")
    }
}

module.exports=Shape
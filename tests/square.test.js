const Square=require("../lib/square")
const square=new Square("MAG","black","yellow")

describe("Square", ()=>{
    describe("properties", ()=>{
        it("test text, textColor, and shapeColor", ()=>{  
            expectr(square.text).toEqual("MAG")
            expect(square.textColor).toEqual("black")
            expect(square.shapeColor).toEqual("yellow")

        })
    })

    describe("method (is function in an object", ()=>{
        it("test render()", ()=>{
            expect(square.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect x="10" y="10" width="300" height="200" fill="yellow" stroke-width="5"/>><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">MAG</text></svg>`)

        })
    })
})
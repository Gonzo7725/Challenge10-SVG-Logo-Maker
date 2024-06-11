const Triangle=require("../lib/triangle")
const triangle=new Triangle("MAG","black","yellow")

describe("Triangle", ()=>{
    describe("properties", ()=>{
        it("test text, textColor, and shapeColor", ()=>{     
            expect(triangle.text).toEqual("MAG")
            expect(triangle.textColor).toEqual("black")
            expect(triangle.shapeColor).toEqual("yellow")

        })
    })

    describe("method (is function in an object", ()=>{
        it("test render()", ()=>{
             expect(triangle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon width="300" height="200" points="150, 18 244, 182 56, 182" fill="yellow" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">MAG</text></svg>`)

        })
    })
})
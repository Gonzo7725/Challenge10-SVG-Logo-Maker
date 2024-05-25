const Circle=require("../lib/circle")
const circle=new Circle("MAG","black","yellow")

describe("Circle", ()=>{
    describe("properties", ()=>{
        it("test text, textColor, and shapeColor", ()=>{  
            expect(circle.text).toEqual("MAG")
            expect(circle.textColor).toEqual("black")
            expect(circle.shapeColor).toEqual("yellow")

        })
    })

    describe("method (is function in an object", ()=>{
        it("test render()", ()=>{
            expect(circle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="150" cy="100" r="80" fill="yellow"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">MAG</text></svg>`)

        })
    })
})
const inquirer=("inquirer")
const fs=require("fs")
const Circle=require("./lib/circle")
const Square=require("./lib/square")
const Triangle=require("./lib/triangle")

const questions=[
    {
        type:"list",
        message:"choose the following shape:",
        name:"shape",
        choices:["circle","square","triangle"]
    },
    {
        type:"input",
        message:"Enter 3 letters:",
        name:"text"
    },
    {
        type:"input",
        message:"Enter text color:",
        name:"textColor"
    },
    {
        type:"input",
        message:"Enter shape color:",
        name:"shapeColor"
    }
]

inquirer.prompt(questions)
.then(data=>{
    if(data.shape==="circle"){
        const circle=new Circle(data.text,data.textColor,data.shapeColor)
        fs.writeFile("./examples/circle.svg", circle.render(), err=>{
            console.log("success")
        })

    }
    else if(data.shape==="triangle"){
        const triangle=new Triangle(data.text,data.textColor,data.shapeColor)
        fs.writeFile("./examples/triangle.svg", triangle.render(), err=>{
            console.log("success")
        })
    
    }else{
        const square=new Square(data.text,data.textColor,data.shapeColor)
        fs.writeFile("./examples/square.svg", square.render(), err=>{
            console.log("success")
        })

    }

    
})
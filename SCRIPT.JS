// let newbtn = document.createElement("button");
// newbtn.innerText = "click me";
// document.body.appendChild(newbtn);

// newbtn.style.color = "white";
// newbtn.style.backgroundColor = "blue";
// document.querySelector("body").prepend(newbtn);



// // patice

// let para = document.querySelector("p");

// Event Target

// let btn = document.querySelector("#btn");

// btn.onclick = (evt)=> {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);

    // let a = 25;.type);
    // console.log(
    // a++;
    // console.log(a);


// let div = document.querySelector("div");

// div.onmouseover = ()=>{
    // console.log("please open it");
//     let a =("congratulation Farhat Tygai"), style= "color: purple; font-weight: bold;";
//     console.log(a);
 
//  let btn = document.querySelector("#btn");
//  btn.addEventListener("click", () => {
//     console.log("button was clicked");
//  })


 let flexbtn = document.querySelector("#flex");

 let currflex = "light";
  
 flexbtn.addEventListener("click", () =>{
    if(currflex === "light"){
        currflex = "dark";
        document.querySelector("body").classList.add("dark");
        
    }else{
        currflex = "light";
        document.querySelector("body").classList.add("light");
    }
    console.log(currflex);
 })
console.log("babaji");
let music=new Audio("");
let audioTurn=new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3")
let turn="x"
let isgameover1=false;


// function to chane the turn
const changeTurn=()=>{

    return turn==="x"?"0":"x"  // ydi turn x likh gya vha to uske bad 0 aaye ydi 0 likh diya vha to x aaye (ye logic hai)

}
// function to check for a win
const checkWin=()=>{
    let boxtext=document.getElementsByClassName('boxtext')
    let wins=[
        [0,1,2,-5,2.5,0],
        [3,4,5,-5,7,0],
        [6,7,8,-5,12,0],
        [0,3,6,-7.5,8,90],
        [1,4,7,-3,10,90],
        [2,5,8,2,9,90],
        [0,4,8,-4,6,45],
        [2,4,6,-3,7.5,134],
    ]
     wins.forEach(e=>{
    if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!=='')){
     document.querySelector('.info').innerText=boxtext[e[0]].innerText+"won"
     isgameover1=true
     document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="100px"
     document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
     document.querySelector(".line").style.width="20vw"
    }
     })
}
// game logic
// music.play();
let boxes=document.getElementsByClassName('box')
Array.from(boxes).forEach(element => {
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
        boxtext.innerText=turn;
         turn= changeTurn();
         audioTurn.play();
         checkWin();
         if(!isgameover1){  // mtlb (isgameover) upr win hoke (true) ho jayega to ye line kya kregi(ki (isgameover) true ho jayegi or ye (not) use (not true) bta dega or else me chla jayega {jb win ho jayega to ye line nhi aayegi}
            // console.log(isgameover1);
             document.getElementsByClassName("info")[0].innerText="turn for"+turn;
         }
         else{
            console.log("jese false hui ye else me aaya( only smjhne ke liye)")
         }
        }
    })
});
// 52:00 reset button
reset.addEventListener('click',()=>{
     let boxtexts=document.querySelectorAll('.boxtext');//yha vhi veriable bhi leskte hai or boxtestsbhi kr skte hai (let boxtexts)
     Array.from(boxtexts).forEach(element=>{
        element.innerText=""
     });
     turn  ="x";// yha chota x hi lgana vrna dublle x aata hai
     isgameover1=false
     document.querySelector(".line").style.width="0vw"
    document.getElementsByClassName("info")[0].innerText="turn for"+turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"

        
     
})

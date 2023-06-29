let item1 = document.getElementById('item1')
let item2 = document.getElementById('item2')
let item3 = document.getElementById('item3')
let arr = ["😀","😀", "😄", "😁", "😆", "😅", "😂", "🤣" ]

function random(){
    return arr[Math.floor(Math.random()*8)]
}

let myintervel;

let start = document.getElementById('start')
start.onclick = function(){

  item1.style.animation = "roll infinite 0.1s"
  item2.style.animation = "roll infinite 0.1s"
  item3.style.animation = "roll infinite 0.1s"


  myintervel =  setInterval(() => {

        item1.innerText = random()
        item2.innerText = random()
        item3.innerText = random()

    }, 100 )

    setTimeout( () => {

      clearInterval(myintervel)

  item1.style.animation = ""
  item2.style.animation = ""
  item3.style.animation = ""
    } , 5000);

    setTimeout( ()=> {
      let x = item1.innerText
      let y = item2.innerText
      let z = item3.innerText
      
      if(x==y & y==z){
          let win = document.getElementById('win');
          win.removeAttribute('hidden');
      }
      else{
        let loos = document.getElementById('loos');
        loos.removeAttribute('hidden');
      }

    },6000)

  

}

let reset = document.getElementById('reset');
reset.onclick = function(){

  item1.innerText = "☢️"
  item2.innerText = "☢️"
  item3.innerText = "☢️"
  let loos = document.getElementById('loos');
  loos.setAttribute('hidden',true);

}






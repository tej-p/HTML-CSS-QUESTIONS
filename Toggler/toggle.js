

let num = 0;
function toggler() {
   
    return ()=>{
          let value=num.toString()
        
          if(arguments[value]==undefined){
              num = 0;
              value = num.toString()
          }
           console.log(arguments[value])
           num++

    }
}

const toggle = toggler(1,2,3)

toggle()
// 1
toggle()
// 2
toggle()
// 3
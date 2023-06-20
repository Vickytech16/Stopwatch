// 04/04/2023

let min=document.getElementById("min")
let sec=document.getElementById("sec")
let ms=document.getElementById("ms")
a=0
b=0
c=0
arr=[a,b,c]

function settime([a,b,c])
{
 a++
 if (a>59)
 {
  a=0
  b++
 }
 if (b>59)
 {
  b=0
  c++
 } 
 return [a,b,c]
}

let x
function start()
{
 if (x!=null)
  clearInterval(x)

 x=setInterval(() => {
  arr=settime(arr)
  ms.innerHTML=padzero(arr[0])
  sec.innerHTML=padzero(arr[1])
  min.innerHTML=padzero(arr[2])
 }, 16);
}

function padzero(el)
{
 return el<10?"0"+el:el
}

function stop()
{
 if (x!=null)
  clearInterval(x)
}

function reset()
{
 arr=[0,0,0]
 a=0,b=0,c=0
 if (x!=null)
  clearInterval(x)
 ms.innerHTML=padzero(arr[0])
 sec.innerHTML=padzero(arr[1])
 min.innerHTML=padzero(arr[2]) 
}

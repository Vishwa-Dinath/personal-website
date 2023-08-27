const occupationElm = $('#occupation');
const texts = ['Full Stack Web Developer','Freelancer','Statistician'];

let i = 0;
let j = 0;
let k = 0;
let erase = false;
setInterval(()=>{
    j++;
    let text = texts[k];
    if (j%2===0 && !erase){
        i++;
        occupationElm.text(text.substring(0,i))
        if (i>=text.length){
            erase = true;
        }
    }else if (erase){
        i--;
        occupationElm.text(text.substring(0,i));
        if(i<=0){
            erase = false;
            k++;
            if (k===texts.length){
                k=0;
            }
        }
    }
},100)
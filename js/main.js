const occupationElm = $('#occupation');
const texts = ['Full Stack Web Developer','Freelancer','Statistician'];
const theme = $('#theme')

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

var r = document.querySelector(':root');

let dark = true;

// function myFunction_get() {
//     var rs = getComputedStyle(r);
//     alert("The value of --blue is: " + rs.getPropertyValue('--dark'));
// }

function myFunction_set(colour1,colour2) {
    r.style.setProperty('--dark', colour1);
    r.style.setProperty('--light', colour2);
}

theme.on('click',()=>{
    if (dark){
        myFunction_set('#aed6ef','#000000');
        dark = false;
    }else if (!dark){
        myFunction_set('black','white');
        dark = true;
    }
})
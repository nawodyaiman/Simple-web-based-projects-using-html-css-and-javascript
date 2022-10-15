const buttons= document.querySelectorAll('.btn');
const content= document.querySelector('.content');

const fontSizeUp = document.querySelector('.fontSizeUp');
const fontSizeDown = document.querySelector('.fontSizeDown');

const fontSizeSpan = document.querySelector('.fontSizeSpan');

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',(e)=>{
        let command=e.target.getAttribute('data');
        if(command==="createLink"||command==="insertLink"){
            let url=prompt("Link: ");
            document.execCommand(command,false,url)

        } else{
            document.execCommand(command,false,null);
        }

    }   ) 
}
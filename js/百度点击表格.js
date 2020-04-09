var tds=document.querySelectorAll("td");
for(let i=0;i<tds.length;i++){
    tds[i].addEventListener("click",function(){
        for(let j=0;j<tds.length;j++){
            tds[j].className="";
        }

        tds[i].classList.add("current");
        if(tds[i].nextElementSibling){
            tds[i].nextElementSibling.classList.add("wrap");
        }
        if(tds[i].previousElementSibling){
            tds[i].previousElementSibling.classList.add("wrap");
        }

        if(tds[i].parentElement.nextElementSibling!==null){
            let x=tds[i].parentElement.nextElementSibling.children[i%10]
            x.classList.add("wrap");
            if(i%10!==9){
                if(x.nextElementSibling){
                    x.nextElementSibling.classList.add("wrap");
                }
            }
            if(i%10!==0){
                if(x.previousElementSibling){
                    x.previousElementSibling.classList.add("wrap");
                }
            }
        }

        if(tds[i].parentElement.previousElementSibling!==null){
            tds[i].parentElement.previousElementSibling.children[i%10].classList.add("wrap")
        
            if((i%10)!==9){
                if(tds[i].parentElement.previousElementSibling.children[(i+1)%10]!==null){
                    tds[i].parentElement.previousElementSibling.children[(i+1)%10].classList.add("wrap")
                }
            }
            if((i%10)!==0){
                if(tds[i].parentElement.previousElementSibling.children[(i-1)%10]!==null){
                    tds[i].parentElement.previousElementSibling.children[(i-1)%10].classList.add("wrap")
                }
            }
        }
    })
}
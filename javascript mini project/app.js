let btn=document.querySelector('button');
let inp=document.querySelector('input');
let ul=document.querySelector('ul');
btn.addEventListener('click',function(){
    let list=document.createElement('li');
    list.innerText=inp.value;
    ul.appendChild(list);
    console.log(inp.value);
    inp.value="";

    let delbtn=document.createElement('button');
    delbtn.innerText='delete'
    delbtn.classList.add('delete')
    list.appendChild(delbtn)

})
ul.addEventListener('click',function (event){
    if (event.target.nodeName == "BUTTON") {
        let item=event.target.parentElement;
        item.remove();
        console.log('deleteed');
    }
    
})

    // let delbtns=document.querySelectorAll('.delete');
    // for(delbtn of delbtns){
    //     delbtn.addEventListener('click',function(){
    //         let par=this.parentElement;
    //         console.log(par);
    //         par.remove();
           
    //     })
    // }
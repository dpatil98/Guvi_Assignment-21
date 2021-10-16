document.body.innerHTML =`
    <div style="background:#dbdbdb; padding:100px">
        <h1 class="msg" style="margin-left:44%;"></h1>
    </div>

`
let cdStart=11;
var cd=document.querySelector('.msg');
  
setTimeout( () => {
        cd.innerText=--cdStart
        setTimeout( () => {cd.innerText=--cdStart
            setTimeout( () => {cd.innerText=--cdStart
                setTimeout( () => {cd.innerText=--cdStart
                    setTimeout( () => {cd.innerText=--cdStart
                        setTimeout( () => {cd.innerText=--cdStart
                            setTimeout( () => {cd.innerText=--cdStart
                                setTimeout( () => {cd.innerText=--cdStart
                                    setTimeout( () => {cd.innerText=--cdStart
                                        setTimeout( () => {cd.innerText=--cdStart
                                            setTimeout( () => {cd.innerText="Happy Independence Day!!!"
                                            
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    } ,1000);

let stepOne = document.getElementById("stepOne");
let sPlan = document.getElementById("sPlan");
let pInfo = document.getElementById("pInfo");
let pAddon = document.getElementById("pAddon");
let finishup = document.getElementById("finishup");
let success = document.getElementById("success");
let li = document.querySelector("li");
let pArcade = document.getElementById("pArcade");
let pAdvanced = document.getElementById("pAdvanced");
let pPro = document.getElementById("pPro");
let onServiceBox = document.getElementById("onServiceBox");
let laStorageBox = document.getElementById("laStorageBox");
let cuProfileBox = document.getElementById("cuProfileBox");
let idService = document.getElementById("idService");
let idStorage = document.getElementById("idStorage");
let idProfile = document.getElementById("idProfile");
let mybuttons = document.getElementById("mybuttons3");
let bonus = document.getElementsByClassName("bonus");
let dotOne = document.getElementById("dotOne");
let dotTwo = document.getElementById("dotTwo");
let dotThree = document.getElementById("dotThree");
let myForm = document.getElementById("myForm");
let myliOne = document.querySelectorAll("li")[0];
let myliTwo = document.querySelectorAll("li")[1];
let myliThree = document.querySelectorAll("li")[2];
let myliFour = document.querySelectorAll("li")[3];
let createdEl = document.createElement("style");
document.head.appendChild(createdEl);

let pInfoInputName, pInfoInputEmail, pInfoInputNumber;
function handleChange(event){
    let checker = event.target.value
    let convert = Number(checker); 
    let myNumber = isNaN(convert);
    if(checker.includes('@')){
        console.log("It's and email address");
        pInfoInputEmail = event.target.value;
    }else if(!checker.includes('@') && myNumber === true){
        console.log("it's just a name");
        pInfoInputName = event.target.value;
    }else{
        console.log("It's just a number");
        pInfoInputNumber = event.target.value;
    }
}

let mydocs = " ";
mydocs = document.getAnimations("pInfoInputName").value;
myliOne.addEventListener('click',function(){
    toStepOne();
});
myliTwo.addEventListener('click',function(){
    toStepTwo();
});
myliThree.addEventListener('click',function(){
    toStepThree();
});
myliFour.addEventListener('click',function(){
    toStepFour();
});
function toStepOne(){
    pAddon.style.display = "none";
    finishup.style.display = "none";
    pInfo.style.display = "flex";
    sPlan.style.display = "none";
    success.style.display = "none";
    createdEl.sheet.insertRule(`
        li:nth-child(1)::before{ 
            color: #444 !important; 
            background: #87ceeb;
        }
        `,createdEl.sheet.cssRules.length)
    createdEl.sheet.insertRule(`
        li:nth-child(2)::before,
        li:nth-child(3)::before,
        li:nth-child(4)::before{ 
            color: white !important; 
            background: transparent;
        }
        `,createdEl.sheet.cssRules.length)
}
function toStepTwo(){
    pAddon.style.display = "none";
    finishup.style.display = "none";
    pInfo.style.display = "none";
    sPlan.style.display = "flex";
    success.style.display = "none";
    console.log("name",pInfoInputName);
    console.log("email",pInfoInputEmail);
    console.log("number",pInfoInputNumber);
    createdEl.sheet.insertRule(`
        li:nth-child(2)::before{ 
            color: #444 !important; 
            background: #87ceeb;
        }
        `,createdEl.sheet.cssRules.length)
    createdEl.sheet.insertRule(`
        li:nth-child(1)::before,
        li:nth-child(3)::before,
        li:nth-child(4)::before{ 
            color: white !important; 
            background: transparent;
        }
        `,createdEl.sheet.cssRules.length)
}
function toStepThree(){
    finishup.style.display = "none";
    pInfo.style.display = "none";
    sPlan.style.display = "none";
    pAddon.style.display = "flex";
    success.style.display = "none";
    createdEl.sheet.insertRule(`
        li:nth-child(3)::before{ 
            color: #444 !important; 
            background: #87ceeb;
        }
        `,createdEl.sheet.cssRules.length);
    createdEl.sheet.insertRule(`
        li:nth-child(1)::before,
        li:nth-child(2)::before,
        li:nth-child(4)::before{ 
            color: white !important; 
            background: transparent;
        }
        `,createdEl.sheet.cssRules.length)
}
function toStepFour(){
    pInfo.style.display = "none";
    sPlan.style.display = "none";
    pAddon.style.display = "none";
    finishup.style.display = "block";
    success.style.display = "none"
    createdEl.sheet.insertRule(`
        li:nth-child(4)::before{ 
            color: #444 !important; 
            background: #87ceeb;
        }
        `,createdEl.sheet.cssRules.length);
    createdEl.sheet.insertRule(`
        li:nth-child(1)::before,
        li:nth-child(2)::before,
        li:nth-child(3)::before{ 
            color: white !important; 
            background: transparent;
        }
        `,createdEl.sheet.cssRules.length)
}
function toSuccess(){
    finishup.style.display = "none"
    success.style.display = "block"
}
function goToOne(){
    pInfo.style.display = "flex";
    sPlan.style.display = "none";
    success.style.display = "none";
    createdEl.sheet.insertRule(`
        li:nth-child(1)::before{ 
            color: #444 !important; 
            background: #87ceeb;
        }
        `,createdEl.sheet.cssRules.length);
    ;createdEl.sheet.insertRule(`
        li:nth-child(2)::before,
        li:nth-child(3)::before,
        li:nth-child(4)::before{ 
            color: white !important; 
            background: transparent;
        }
        `,createdEl.sheet.cssRules.length);
}
function goToTwo(){
    pAddon.style.display = "none";
    sPlan.style.display = "flex";
    createdEl.sheet.insertRule(`
        li:nth-child(2)::before{ 
            color: #444 !important; 
            background: #87ceeb;
        }
        `,createdEl.sheet.cssRules.length);
    createdEl.sheet.insertRule(`
        li:nth-child(1)::before,
        li:nth-child(3)::before,
        li:nth-child(4)::before{ 
            color: white !important; 
            background: transparent;
        }
        `,createdEl.sheet.cssRules.length);
}
function goToThree(){
    finishup.style.display = "none";
    pAddon.style.display = "flex";
    createdEl.sheet.insertRule(`
        li:nth-child(3)::before{ 
            color: #444 !important; 
            background: #87ceeb;
        }
        `,createdEl.sheet.cssRules.length);
    createdEl.sheet.insertRule(`
        li:nth-child(1)::before,
        li:nth-child(2)::before,
        li:nth-child(4)::before{ 
            color: white !important; 
            background: transparent;
        }
        `,createdEl.sheet.cssRules.length);
}
function goToFour(){
    pAddon.style.display = "block";
    finishup.style.display = "none";
    createdEl.sheet.insertRule(`
        li:nth-child(4)::before{ 
            color: #444 !important; 
            background: #87ceeb;
        }
        `,createdEl.sheet.cssRules.length);
    createdEl.sheet.insertRule(`
        li:nth-child(1)::before,
        li:nth-child(2)::before,
        li:nth-child(3)::before{ 
            color: white !important; 
            background: transparent;
        }
        `,createdEl.sheet.cssRules.length);
}
dotOne.addEventListener('click',function(){
    if(dotOne.style.opacity == 0){
        dotOne.style.opacity = 1;
        dotTwo.style.opacity = 0;
    }
    pArcade.innerHTML = "$9/mo";
    pAdvanced.innerHTML = "$12/mo";
    pPro.innerHTML = "$15/mo";
    bonus[0].style.display = "none";
    bonus[1].style.display = "none";
    bonus[2].style.display = "none";
})
dotTwo.addEventListener('click',function(){
    if(dotTwo.style.opacity == 0){
        dotOne.style.opacity = 0;
        dotTwo.style.opacity = 1;
    }
    pArcade.innerHTML = "$90/yr";
    pAdvanced.innerHTML = "$120/yr";
    pPro.innerHTML = "$150/yr";
    bonus[0].style.display = "block";
    bonus[1].style.display = "block";
    bonus[2].style.display = "block";
    // mybuttons.style.marginTop = 100 + "%";
})
dotThree.addEventListener('click',function(){
    if(dotTwo.style.opacity == 0){
        dotOne.style.opacity = 0;
        dotTwo.style.opacity = 1;
        bonus[0].style.display = "block";
        bonus[1].style.display = "block";
        bonus[2].style.display = "block";
    }else{
        dotOne.style.opacity = 1;
        dotTwo.style.opacity = 0;
        bonus[0].style.display = "none";
        bonus[1].style.display = "none";
        bonus[2].style.display = "none";
    }
})
idService.addEventListener('click',function(){
    onServiceBox.checked = !onServiceBox.checked;
    if(onServiceBox.checked === true){
        idService.style.background = "#fafbff";
        idService.style.borderColor = "#02295a";
    }else{
        idService.style.background = "white";
        idService.style.borderColor = "#d6d9e6";
    }
});
idStorage.addEventListener('click',function(){
    laStorageBox.checked = !laStorageBox.checked;
    if(laStorageBox.checked === true){
        idStorage.style.background = "#fafbff";
        idStorage.style.borderColor = "#02295a";
    }else{
        idStorage.style.background = "white";
        idStorage.style.borderColor = "#d6d9e6";
    }
});
idProfile.addEventListener('click',function(){
    cuProfileBox.checked = !cuProfileBox.checked;
    if(cuProfileBox.checked === true){
        idProfile.style.background = "#fafbff";
        idProfile.style.borderColor = "#02295a";
    }else{
        idProfile.style.background = "white";
        idProfile.style.borderColor = "#d6d9e6";
    }
});
myForm.addEventListener('submit',function(e){
    e.preventDefault();
})
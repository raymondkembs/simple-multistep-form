let stepOne = document.getElementById("stepOne");
let sPlan = document.getElementById("sPlan");
let pInfo = document.getElementById("pInfo");
let pAddon = document.getElementById("pAddon");
let finishup = document.getElementById("finishup");
let success = document.getElementById("success");
let li = document.querySelector("li");
let pArcade = document.getElementById("pArcade");
let sPlanArcade = document.getElementById("sPlanArcade");
let sPlanAdvanced = document.getElementById("sPlanAdvanced");
let sPlanPro = document.getElementById("sPlanPro");
let monthlyPlan = document.getElementById("monthlyPlan");
let monthlyPlanPrice = document.getElementById("monthlyPlanPrice");
let pAdvanced = document.getElementById("pAdvanced");
let pPro = document.getElementById("pPro");
let totalPrice = document.getElementById("totalPrice");
let totalName = document.getElementById("totalName");
let advancedBox = document.getElementById("advancedBox");
let onServiceBox = document.getElementById("onServiceBox");
let laStorageBox = document.getElementById("laStorageBox");
let cuProfileBox = document.getElementById("cuProfileBox");
let idService = document.getElementById("idService");
let idStorage = document.getElementById("idStorage");
let idProfile = document.getElementById("idProfile");
let mybuttons = document.getElementById("mybuttons3");
let bonus = document.getElementsByClassName("bonus");
let online = document.getElementById("online");
let onlineTdPrice = document.getElementById("onlineTdPrice");
let storage = document.getElementById("storage");
let profile = document.getElementById("profile");
let idServicePrice = document.getElementById("idServicePrice");
let idStoragePrice = document.getElementById("idStoragePrice");
let idProfilePrice = document.getElementById("idProfilePrice");
let idProfilePrice2 = document.getElementById("idProfilePrice2");
let idServicePrice2 = document.getElementById("idServicePrice2");
let idStoragePrice2 = document.getElementById("idStoragePrice2");
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
let sPlanArcadeMonth, sPlanAdvancedMonth, sPlanProMonth;
let myValue, myValue1, myValue2;
let yrArcade = 90; 
let yrAdvanced = 120;
let yrPro = 150;
let moArcade = 9;
let moAdvanced = 12;
let moPro = 15;
let addOnline = 1; 
let addStorage = 2; 
let addProfile = 2;


sPlanArcade.addEventListener('click',function(){
    myValue = window.getComputedStyle(dotTwo).getPropertyValue("opacity");
    arcadeBox.checked = !arcadeBox.checked;
    if(arcadeBox.checked === true){
        console.log(myValue);
        if(Number(myValue) === 1){
            console.log("Arcade opacity is Yearly");
            monthlyPlan.textContent = "Arcade(Yearly)";
            monthlyPlanPrice.textContent ="$" + yrArcade + "/yr";
            totalPrice.textContent = "$" + yrArcade + "/yr";

        }else if(Number(myValue) === 0){
            console.log("Arcade opacity is monthly");
            monthlyPlan.textContent = "Arcade(Monthly)";
            monthlyPlanPrice.textContent ="$" + moArcade + "/mo";
            totalPrice.textContent = "$" + moArcade + "/mo";
        }else{
            console.log("don't know the value",myValue);
        }
        sPlanArcade.style.backgroundColor = "#f0f6ff";
        sPlanArcade.style.borderColor = "#02295a";
        sPlanAdvanced.style.backgroundColor = "white";
        sPlanAdvanced.style.borderColor = "#d6d9e6";
        sPlanPro.style.backgroundColor = "white";
        sPlanPro.style.borderColor = "#d6d9e6";
    }
})
sPlanAdvanced.addEventListener('click',function(){
    myValue1 = window.getComputedStyle(dotTwo).getPropertyValue("opacity");
    advancedBox.checked = !advancedBox.checked
    console.log(myValue1)
    if(advancedBox.checked === true){
        if(Number(myValue1) === 1){
            console.log("Adv opacity is Yearly");
            monthlyPlan.textContent = "Advanced(Yearly)";
            monthlyPlanPrice.textContent ="$" + yrAdvanced + "/yr";
            totalPrice.textContent = "$" + yrAdvanced + "/yr";
        }else if(Number(myValue1) === 0){
            console.log("Adv opacity is monthly");
            monthlyPlan.textContent = "Advanced(Monthly)";
            monthlyPlanPrice.textContent ="$" + moAdvanced + "/mo"
            totalPrice.textContent = "$" + moAdvanced + "/mo";
        }else{
            console.log("don't know the value",myValue);
        }
        sPlanAdvanced.style.backgroundColor = "#f0f6ff";
        sPlanAdvanced.style.borderColor = "#02295a";
        sPlanPro.style.backgroundColor = "white"
        sPlanPro.style.borderColor = "#d6d9e6";
        sPlanArcade.style.backgroundColor = "white";
        sPlanArcade.style.borderColor = "#d6d9e6";
    }
})
sPlanPro.addEventListener('click',function(){
    myValue2 = window.getComputedStyle(dotTwo).getPropertyValue("opacity");
    proBox.checked = !proBox.checked
    if(proBox.checked === true){
        console.log("check this",typeof(Number(myValue2)))
        if(Number(myValue2) === 1){
            console.log("Pro opacity is Yearly");
            monthlyPlan.textContent = "Pro(Yearly)";
            monthlyPlanPrice.textContent ="$" + yrPro + "/yr";
            totalPrice.textContent = "$" + yrPro + "/yr";
        }else if(Number(myValue2) === 0){
            console.log("Pro opacity is monthly");
            monthlyPlan.textContent = "Pro(Monthly)";
            monthlyPlanPrice.textContent ="$" + moPro + "/mo";
            totalPrice.textContent = "$" + moPro + "/mo";
        }else{
            console.log("don't know the value",myValue);
        }
        sPlanPro.style.backgroundColor = "#f0f6ff";
        sPlanPro.style.borderColor = "#02295a";
        sPlanArcade.style.backgroundColor = "white";
        sPlanArcade.style.borderColor = "#d6d9e6";
        sPlanAdvanced.style.backgroundColor = "white";
        sPlanAdvanced.style.borderColor = "#d6d9e6";
    }
})
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
    success.style.display = "none";

    if(arcadeBox.checked === true && dotTwo.style.opacity == 1){
        let num1, num2, num3 = 0;
        if(onServiceBox.checked){num1 = addOnline;}
        if(laStorageBox.checked){num2 = addStorage;}
        if(cuProfileBox.checked){ num3 = addProfile;}
        if(!onServiceBox.checked){ num1 = 0;}
        if(!laStorageBox.checked){num2 = 0;}
        if(!cuProfileBox.checked){num3 = 0;}
        if(!cuProfileBox.checked && !laStorageBox.checked && !onServiceBox.checked){
            totalPrice.textContent = yrArcade;
        }
        totalPrice.textContent = num1 + num2 + num3 + yrArcade;
        console.log("year", num1, num2 , num3)
    }else if(arcadeBox.checked === true && dotTwo.style.opacity == 0){
        if(onServiceBox.checked){num1 = addOnline;}
        if(laStorageBox.checked){num2 = addStorage;}
        if(cuProfileBox.checked){ num3 = addProfile;}
        if(!onServiceBox.checked){ num1 = 0;}
        if(!laStorageBox.checked){num2 = 0;}
        if(!cuProfileBox.checked){num3 = 0;}
        if(!cuProfileBox.checked && !laStorageBox.checked && !onServiceBox.checked){
            totalPrice.textContent = moArcade;
        }
        totalPrice.textContent = num1 + num2 + num3 + moArcade;
        console.log("months", num1, num2 , num3)
    }else if(advancedBox.checked === true && dotTwo.style.opacity == 1){
        let num1, num2, num3 = 0;
        if(onServiceBox.checked){num1 = addOnline;}
        if(laStorageBox.checked){num2 = addStorage;}
        if(cuProfileBox.checked){ num3 = addProfile;}
        if(!onServiceBox.checked){ num1 = 0;}
        if(!laStorageBox.checked){num2 = 0;}
        if(!cuProfileBox.checked){num3 = 0;}
        if(!cuProfileBox.checked && !laStorageBox.checked && !onServiceBox.checked){
            totalPrice.textContent = yrAdvanced;
        }
        totalPrice.textContent = num1 + num2 + num3 + yrAdvanced;
        console.log("year", num1, num2 , num3)
    }else if(advancedBox.checked === true && dotTwo.style.opacity == 0){
        if(onServiceBox.checked){num1 = addOnline;}
        if(laStorageBox.checked){num2 = addStorage;}
        if(cuProfileBox.checked){num3 = addProfile;}
        if(!onServiceBox.checked){num1 = 0;}
        if(!laStorageBox.checked){num2 = 0;}
        if(!cuProfileBox.checked){num3 = 0;}
        if(!cuProfileBox.checked && !laStorageBox.checked && !onServiceBox.checked){
            totalPrice.textContent = moAdvanced;
        }
        totalPrice.textContent = num1 + num2 + num3 + moAdvanced;
        console.log("months", num1, num2 , num3)
    }else if(proBox.checked === true && dotTwo.style.opacity == 1){
        let num1, num2, num3 = 0;
        if(onServiceBox.checked){num1 = addOnline;}
        if(laStorageBox.checked){num2 = addStorage;}
        if(cuProfileBox.checked){num3 = addProfile;}
        if(!onServiceBox.checked){num1 = 0;}
        if(!laStorageBox.checked){num2 = 0;}
        if(!cuProfileBox.checked){num3 = 0;}
        if(!cuProfileBox.checked && !laStorageBox.checked && !onServiceBox.checked){
            totalPrice.textContent = yrPro;
        }
        totalPrice.textContent = num1 + num2 + num3 + yrPro;
        console.log("year", num1, num2 , num3)
    }else if(proBox.checked === true && dotTwo.style.opacity == 1){
        if(onServiceBox.checked){num1 = addOnline;}
        if(laStorageBox.checked){num2 = addStorage;}
        if(cuProfileBox.checked){num3 = addProfile;}
        if(!onServiceBox.checked){num1 = 0;}
        if(!laStorageBox.checked){num2 = 0;}
        if(!cuProfileBox.checked){num3 = 0;}
        if(!cuProfileBox.checked && !laStorageBox.checked && !onServiceBox.checked){
            totalPrice.textContent = moPro;
        }
        totalPrice.textContent = num1 + num2 + num3 + moPro;
        console.log("months", num1, num2 , num3)
    }else{
        totalPrice.textContent = "-"
        console.log("No plan was selected");
    }
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
    if(arcadeBox.checked === true){
        console.log("arcade is true");
        monthlyPlan.textContent = "Arcade(Monthly)";
        monthlyPlanPrice.textContent ="$" + moArcade + "/mo";
        totalPrice.textContent = "$" + moArcade + "/mo";
    }else if(advancedBox.checked === true){
        console.log("advanced is true");
        monthlyPlan.textContent = "Advanced(Monthly)";
        monthlyPlanPrice.textContent ="$" + moAdvanced + "/mo";
        totalPrice.textContent = "$" + moAdvanced + "/mo";
    }else if(proBox.checked === true){
        console.log("pro is true");
        monthlyPlan.textContent = "Pro(Monthly)";
        monthlyPlanPrice.textContent ="$" + moPro + "/mo";
        totalPrice.textContent = "$" + moPro + "/mo";
    }else{
        console.log("all are empty");
    }
    idProfilePrice2.textContent = "+$ " + moPro + "/mo";
    totalName.textContent = "Total (per month)";
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
    if(arcadeBox.checked === true){
        console.log("arcade is true");
        monthlyPlan.textContent = "Arcade(Yearly)";
        monthlyPlanPrice.textContent ="$" + yrArcade + "/yr"
        totalPrice.textContent = "$" + yrArcade + "/yr";
    }else if(advancedBox.checked === true){
        console.log("advanced is true");
        monthlyPlan.textContent = "Advanced(Yearly)";
        monthlyPlanPrice.textContent ="$" + yrAdvanced + "/yr";
        totalPrice.textContent = "$" + yrAdvanced + "/yr";
    }else if(proBox.checked === true){
        console.log("pro is true");
        monthlyPlan.textContent = "Pro(Yearly)";
        monthlyPlanPrice.textContent ="$" + yrPro + "/yr";
        totalPrice.textContent = "$" + yrPro + "/yr";
    }else{
        console.log("all are empty");
    }
    // idServicePrice.textContent = "+$ " + addOnline + "/yr";
    // idStoragePrice.textContent = "+$ " + addStorage + "/yr";
    // idProfilePrice.textContent = "+$ " + addProfile + "/yr";
    // idProfilePrice2.textContent = "+$ " + addProfile + "/yr";
    // idStoragePrice2.textContent = "+$ " + addStorage + "/yr";
    // idServicePrice2.textContent = "+$ " + addOnline + "/yr";
    totalName.textContent = "Total (per year)";
})
dotThree.addEventListener('click',function(){
    if(dotTwo.style.opacity == 0){
        dotOne.style.opacity = 0;
        dotTwo.style.opacity = 1;
        bonus[0].style.display = "block";
        bonus[1].style.display = "block";
        bonus[2].style.display = "block";
        pArcade.innerHTML = "$90/yr";
        pAdvanced.innerHTML = "$120/yr";
        pPro.innerHTML = "$150/yr";
        totalName.textContent = "Total (per year)";
    }else{
        dotOne.style.opacity = 1;
        dotTwo.style.opacity = 0;
        bonus[0].style.display = "none";
        bonus[1].style.display = "none";
        bonus[2].style.display = "none";
        pArcade.innerHTML = "$9/mo";
        pAdvanced.innerHTML = "$12/mo";
        pPro.innerHTML = "$15/mo";
        totalName.textContent = "Total (per month)";
    }
})
idService.addEventListener('click',function(){
    onServiceBox.checked = !onServiceBox.checked;
    if(onServiceBox.checked === true){
        idService.style.background = "#fafbff";
        idService.style.borderColor = "#02295a";
        online.style.visibility = "visible";
        // totalPrice.textContent = "$"+(yrArcade + addOnline) + "/yr";
    }else{
        idService.style.background = "white";
        idService.style.borderColor = "#d6d9e6";
        online.style.visibility = "hidden";
    }
});
idStorage.addEventListener('click',function(){
    laStorageBox.checked = !laStorageBox.checked;
    if(laStorageBox.checked === true){
        idStorage.style.background = "#fafbff";
        idStorage.style.borderColor = "#02295a";
        storage.style.visibility = "visible";
        // totalPrice.textContent = "$"+(yrArcade + addStorage) + "/yr";
    }else{
        idStorage.style.background = "white";
        idStorage.style.borderColor = "#d6d9e6";
        storage.style.visibility = "hidden";
    }
});
idProfile.addEventListener('click',function(){
    cuProfileBox.checked = !cuProfileBox.checked;
    if(cuProfileBox.checked === true){
        idProfile.style.background = "#fafbff";
        idProfile.style.borderColor = "#02295a";
        profile.style.visibility = "visible";
        // totalPrice.textContent = "$"+(yrArcade + addProfile) + "/yr";
    }else{
        idProfile.style.background = "white";
        idProfile.style.borderColor = "#d6d9e6";
        profile.style.visibility = "hidden";
    }
});
myForm.addEventListener('submit',function(e){
    e.preventDefault();
})

const search = document.querySelector('.country-search');
const select = document.querySelector('.select');
const caret = document.querySelector('.caret');
const menu = document.querySelector('.menu');
const listItems = document.getElementsByTagName("li")
            Array.from(listItems).forEach(item => {
            });
var liEl = document.getElementsByTagName("li");
console.log(liEl)
var countries = liEl.innerText;
console.log(countries)
const selected = document.querySelector('.selected');
const flag = document.querySelector('.flag');
const input = document.getElementsByClassName('phone-number')[0];
//Add a click event to the select element
select.addEventListener('click', () => {
    //Add the clicked select styles to the select element
    select.classList.toggle('select-clicked');
    //Add the rotate styles to the caret element
    caret.classList.toggle('caret-rotate');
    //Add the open styles to the menu element
    menu.classList.toggle('menu-open');
});

//Search bar for dropdown menu
search.addEventListener("keyup", () => {
    let arr = []; // creating empty array
    let searchedVal = search.value;
    arr = Array.from(listItems).filter(item => {
        return item;
    });
    console.log(arr);
});

//Loop through all option elements
Array.from(listItems).forEach(item => {
    //Add a click event to the option element
    item.addEventListener('click', () => {
        //Change selected inner text to click option inner text
        selected.innerText = item.innerText;
        //Change flag icon
        flag.src = `
            https://purecatamphetamine.github.io/country-flag-icons/3x2/${item.dataset.val}.svg`;
        //Add the clicked select styles to the select element
        select.classList.remove('select-clicked');
        //Add the rotate styles to the caret element
        caret.classList.remove('caret-rotate');
        //Add the open styles to the menu element
        menu.classList.remove('menu-open');
        //Remove active class from all option elements
        Array.from(listItems).forEach(item => {
            item.classList.remove('active');
        });
        //Add active class to clicked option element
        item.classList.add('active');
        updatePlaceholder();
    });
});



// if selected = afg {countrycodes = 93}
/*
function updatePlaceholder() {
    console.log(selected.innerText)
    if (selected.innerText === 'American Samoa  +1') {
        input.placeholder = `1`;
    }   else if (selected.innerText === 'United Kingdom' && selected === '+44') {
        input.placeholder = `44`;
    }   else if (selected.innerText === 'Afghanistan' && selected == '+93' && selected === 'افغانستان') {
        input.placeholder = `37}`;
    }   else if (selected.innerText === 'Åland Islands' && selected === '+358' && selected ==='Åland') {
        input.placeholder = `358}`;
    }
}
*/


//CHANGE THE COUNTRY CODE BY COMPARING ITS ID TO THE OBJECT



function updatePlaceholder() {  
    if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/AF.svg') {
        input.placeholder = `+93`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/AX.svg') {
        input.placeholder = `+358`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/AL.svg') {
            input.placeholder = `+355`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/DZ.svg') {
        input.placeholder = `+213`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/AS.svg') {
        input.placeholder = `+1`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/AD.svg') {
        input.placeholder = `+376`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/AO.svg') {
        input.placeholder = `+244`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/AI.svg') {
        input.placeholder = `+1`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/AG.svg') {
        input.placeholder = `+1`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/AR.svg') {
        input.placeholder = `+54`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/AM.svg') {
        input.placeholder = `+374`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/AW.svg') {
        input.placeholder = `+297`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/AC.svg') {
        input.placeholder = `+247`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/AU.svg') {
        input.placeholder = `+61`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/AT.svg') {
        input.placeholder = `+43`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/AZ.svg') {
        input.placeholder = `+994`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/BS.svg') {
        input.placeholder = `+1`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/BH.svg') {
        input.placeholder = `+973`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/BD.svg') {
        input.placeholder = `+880`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/BB.svg') {
        input.placeholder = `+1`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/BY.svg') {
        input.placeholder = `+375`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/BE.svg') {
        input.placeholder = `+32`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/BZ.svg') {
        input.placeholder = `+501`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/BJ.svg') {
        input.placeholder = `+229`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/BM.svg') {
        input.placeholder = `+1`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/BT.svg') {
        input.placeholder = `+975`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/BO.svg') {
        input.placeholder = `+591`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/BA.svg') {
        input.placeholder = `+387`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/BW.svg') {
        input.placeholder = `+267`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg') {
        input.placeholder = `+55`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/IO.svg') {
        input.placeholder = `+246`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/GS.svg') {
        input.placeholder = `+1`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/BN.svg') {
        input.placeholder = `+673`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/BG.svg') {
        input.placeholder = `+359`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/BF.svg') {
        input.placeholder = `+226`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/BI.svg') {
        input.placeholder = `+257`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/KH.svg') {
        input.placeholder = `+855`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/CM.svg') {
        input.placeholder = `+237`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/CA.svg') {
        input.placeholder = `+1`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/CV.svg') {
        input.placeholder = `+238`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/BQ.svg') {
        input.placeholder = `+599`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/KY.svg') {
        input.placeholder = `+1`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/CF.svg') {
        input.placeholder = `+236`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/TD.svg') {
        input.placeholder = `+235`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/CL.svg') {
        input.placeholder = `+56`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/CN.svg') {
        input.placeholder = `+86`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/CX.svg') {
        input.placeholder = `+61`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/CC.svg') {
        input.placeholder = `+61`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/CO.svg') {
        input.placeholder = `+57`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/KM.svg') {
        input.placeholder = `+269`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/CG.svg') {
        input.placeholder = `+242`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/CD.svg') {
        input.placeholder = `+243`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/CK.svg') {
        input.placeholder = `+682`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/CR.svg') {
        input.placeholder = `+506`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/CI.svg') {
        input.placeholder = `+225`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/HR.svg') {
        input.placeholder = `+385`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/CU.svg') {
        input.placeholder = `+53`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/CW.svg') {
        input.placeholder = `+599`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/CY.svg') {
        input.placeholder = `+357`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/CZ.svg') {
        input.placeholder = `+420`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/DK.svg') {
        input.placeholder = `+45`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/DJ.svg') {
        input.placeholder = `+253`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/DM.svg') {
        input.placeholder = `+1`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/DO.svg') {
        input.placeholder = `+1`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/EC.svg') {
        input.placeholder = `+593`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/EG.svg') {
        input.placeholder = `+20`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/SV.svg') {
        input.placeholder = `+503`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/GQ.svg') {
        input.placeholder = `+240`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/ER.svg') {
        input.placeholder = `+291`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/EE.svg') {
        input.placeholder = `+372`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/SR.svg') {
        input.placeholder = `+268`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/ET.svg') {
        input.placeholder = `+251`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/FK.svg') {
        input.placeholder = `+500`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/FO.svg') {
        input.placeholder = `+298`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/FJ.svg') {
        input.placeholder = `+679`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/FI.svg') {
        input.placeholder = `+358`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg') {
        input.placeholder = `+33`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/GF.svg') {
        input.placeholder = `+594`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/PF.svg') {
        input.placeholder = `+689`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/GA.svg') {
        input.placeholder = `+241`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/GM.svg') {
        input.placeholder = `+220`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/GE.svg') {
        input.placeholder = `+995`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg') {
        input.placeholder = `+49`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/GH.svg') {
        input.placeholder = `+233`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/GI.svg') {
        input.placeholder = `+350`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/GR.svg') {
        input.placeholder = `+30`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/GL.svg') {
        input.placeholder = `+299`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/GD.svg') {
        input.placeholder = `+1`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/GP.svg') {
        input.placeholder = `+590`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/GU.svg') {
        input.placeholder = `+1`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/GT.svg') {
        input.placeholder = `+502`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/GG.svg') {
        input.placeholder = `+44`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/GN.svg') {
        input.placeholder = `+224`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/GW.svg') {
        input.placeholder = `+245`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/GY.svg') {
        input.placeholder = `+592`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/HT.svg') {
        input.placeholder = `+509`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/HN.svg') {
        input.placeholder = `+504`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/HK.svg') {
        input.placeholder = `+852`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/HU.svg') {
        input.placeholder = `+36`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/IS.svg') {
        input.placeholder = `+354`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/IN.svg') {
        input.placeholder = `+91`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/ID.svg') {
        input.placeholder = `+62`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/IR.svg') {
        input.placeholder = `+98`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/IQ.svg') {
        input.placeholder = `+964`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/IE.svg') {
        input.placeholder = `+353`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/IM.svg') {
        input.placeholder = `+44`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/IL.svg') {
        input.placeholder = `+972`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg') {
        input.placeholder = `+39`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/JM.svg') {
        input.placeholder = `+1`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/JP.svg') {
        input.placeholder = `+81`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/JE.svg') {
        input.placeholder = `+44`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/JO.svg') {
        input.placeholder = `+962`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/KZ.svg') {
        input.placeholder = `+7`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/KE.svg') {
        input.placeholder = `+254`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/KI.svg') {
        input.placeholder = `+686`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/XK.svg') {
        input.placeholder = `+383`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/KW.svg') {
        input.placeholder = `+965`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/KG.svg') {
        input.placeholder = `+996`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/LA.svg') {
        input.placeholder = `+856`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/LV.svg') {
        input.placeholder = `+371`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/LB.svg') {
        input.placeholder = `+961`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/LS.svg') {
        input.placeholder = `+266`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/LR.svg') {
        input.placeholder = `+231`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/LY.svg') {
        input.placeholder = `+218`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/LI.svg') {
        input.placeholder = `+423`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/LT.svg') {
        input.placeholder = `+370`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/LU.svg') {
        input.placeholder = `+352`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/MO.svg') {
        input.placeholder = `+853`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/MG.svg') {
        input.placeholder = `+261`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/MW.svg') {
        input.placeholder = `+265`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/MY.svg') {
        input.placeholder = `+60`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/MV.svg') {
        input.placeholder = `+960`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/ML.svg') {
        input.placeholder = `+223`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/MT.svg') {
        input.placeholder = `+356`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/MH.svg') {
        input.placeholder = `+692`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/MQ.svg') {
        input.placeholder = `+596`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/MR.svg') {
        input.placeholder = `+222`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/MU.svg') {
        input.placeholder = `+230`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/YT.svg') {
        input.placeholder = `+262`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/MX.svg') {
        input.placeholder = `+52`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/FM.svg') {
        input.placeholder = `+691`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/MD.svg') {
        input.placeholder = `+373`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/MC.svg') {
        input.placeholder = `+377`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/MN.svg') {
        input.placeholder = `+976`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/ME.svg') {
        input.placeholder = `+382`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/MS.svg') {
        input.placeholder = `+1`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/MA.svg') {
        input.placeholder = `+212`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/MZ.svg') {
        input.placeholder = `+258`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/MM.svg') {
        input.placeholder = `+95`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/NA.svg') {
        input.placeholder = `+264`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/NR.svg') {
        input.placeholder = `+674`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/NP.svg') {
        input.placeholder = `+977`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/NL.svg') {
        input.placeholder = `+31`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/NC.svg') {
        input.placeholder = `+687`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/NZ.svg') {
        input.placeholder = `+64`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/NI.svg') {
        input.placeholder = `+505`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/NE.svg') {
        input.placeholder = `+227`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/NG.svg') {
        input.placeholder = `+234`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/NU.svg') {
        input.placeholder = `+683`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/DM.svg') {
        input.placeholder = `+672`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/KP.svg') {
        input.placeholder = `+850`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/MK.svg') {
        input.placeholder = `+389`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/MP.svg') {
        input.placeholder = `+1`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/NO.svg') {
        input.placeholder = `+47`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/OM.svg') {
        input.placeholder = `+968`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/PK.svg') {
        input.placeholder = `+92`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/PW.svg') {
        input.placeholder = `+680`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/PS.svg') {
        input.placeholder = `+970`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/PA.svg') {
        input.placeholder = `+507`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/PG.svg') {
        input.placeholder = `+675`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/PY.svg') {
        input.placeholder = `+595`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/PE.svg') {
        input.placeholder = `+51`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/PH.svg') {
        input.placeholder = `+63`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/PL.svg') {
        input.placeholder = `+48`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/PT.svg') {
        input.placeholder = `+351`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/PR.svg') {
        input.placeholder = `+1`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/QA.svg') {
        input.placeholder = `+974`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/RE.svg') {
        input.placeholder = `+262`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/RO.svg') {
        input.placeholder = `+40`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/RU.svg') {
        input.placeholder = `+7`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/RW.svg') {
        input.placeholder = `+250`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/WS.svg') {
        input.placeholder = `+685`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/SM.svg') {
        input.placeholder = `+378`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/ST.svg') {
        input.placeholder = `+239`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/SA.svg') {
        input.placeholder = `+966`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/SN.svg') {
        input.placeholder = `+221`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/RS.svg') {
        input.placeholder = `+381`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/SC.svg') {
        input.placeholder = `+248`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/SL.svg') {
        input.placeholder = `+232`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/SG.svg') {
        input.placeholder = `+65`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/SX.svg') {
        input.placeholder = `+1`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/SK.svg') {
        input.placeholder = `+421`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/SI.svg') {
        input.placeholder = `+386`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/SB.svg') {
        input.placeholder = `+677`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/SO.svg') {
        input.placeholder = `+252`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/ZA.svg') {
        input.placeholder = `+27`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/KR.svg') {
        input.placeholder = `+82`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/SS.svg') {
        input.placeholder = `+211`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg') {
        input.placeholder = `+34`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/LK.svg') {
        input.placeholder = `+94`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/BL.svg') {
        input.placeholder = `+500`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/SH.svg') {
        input.placeholder = `+290`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/KN.svg') {
        input.placeholder = `+1`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/LC.svg') {
        input.placeholder = `+1`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/MF.svg') {
        input.placeholder = `+590`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/PM.svg') {
        input.placeholder = `+508`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/VC.svg') {
        input.placeholder = `+1`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/SD.svg') {
        input.placeholder = `+249`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/SR.svg') {
        input.placeholder = `+597`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/SJ.svg') {
        input.placeholder = `+47`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/SE.svg') {
        input.placeholder = `+46`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/CH.svg') {
        input.placeholder = `+41`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/SY.svg') {
        input.placeholder = `+963`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/TW.svg') {
        input.placeholder = `+886`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/TJ.svg') {
        input.placeholder = `+992`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/TZ.svg') {
        input.placeholder = `+255`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/TH.svg') {
        input.placeholder = `+66`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/TL.svg') {
        input.placeholder = `+670`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/TG.svg') {
        input.placeholder = `+228`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/TK.svg') {
        input.placeholder = `+690`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/TO.svg') {
        input.placeholder = `+676`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/TT.svg') {
        input.placeholder = `+1`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/TN.svg') {
        input.placeholder = `+216`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/TM.svg') {
        input.placeholder = `+993`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/TC.svg') {
        input.placeholder = `+1`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/TV.svg') {
        input.placeholder = `+688`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/VG.svg') {
        input.placeholder = `+1`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/UG.svg') {
        input.placeholder = `+256`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/UA.svg') {
        input.placeholder = `+380`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/AE.svg') {
        input.placeholder = `+971`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg') {
        input.placeholder = `+44`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg') {
        input.placeholder = `+1`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/UY.svg') {
        input.placeholder = `+598`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/UZ.svg') {
        input.placeholder = `+998`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/VU.svg') {
        input.placeholder = `+678`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/VA.svg') {
        input.placeholder = `+379`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/VE.svg') {
        input.placeholder = `+58`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/VN.svg') {
        input.placeholder = `+84`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/WF.svg') {
        input.placeholder = `+681`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/YE.svg') {
        input.placeholder = `+967`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/ZM.svg') {
        input.placeholder = `+260`;
    }   else if (flag.src === 'https://purecatamphetamine.github.io/country-flag-icons/3x2/ZW.svg') {
        input.placeholder = `+263`;
    }                    
};

//LINK NUMBERS TO COUNTRY SELECTED WITH IF STATEMENT
    



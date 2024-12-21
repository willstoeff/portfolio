let effectOnID = null;
let effectOffID = null;
let effectTimeoutID = null;
let effectIntervalID = null;
let indexOn = 0;
let indexOff = 0;
let images = document.querySelectorAll('.image');
let imageIDs = ["linkedin_img", "resume_img", "project_img", "logo_img", "cooking_img", "contact_img", "github_img"];

let effectStartDelay_s = 12000;  //Idle time before effect starts
let effectInterval_s = 7000;    //Time between effect running
let effectOffDelay_s = 1100;    //Wait time of off effect to chase on effect

let effectStartInterval_s = 100;//Interval of effect on call
let effectOffInterval_s = 100;  //Interval of effect off call

let isEffectRunning = false; // Track if the effect is running

console.log("v2.3");

effectTimeoutID = setTimeout(function (){
    effectIntervalID = setInterval(start_effect, effectInterval_s);
    }, effectStartDelay_s);

monitorIconHovering();
monitorVisibilityChange();

function monitorVisibilityChange(){
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            clearInterval(effectIntervalID);
            clearTimeout(effectTimeoutID);
            clearInterval(effectOnID);
            clearInterval(effectOffID);
            indexOn = 0;
            indexOff = 0;
            isEffectRunning = false;
            for(let i = 0; i<7; i++){
                const img = document.getElementById(imageIDs[i]);
                img.classList.remove('effect-on')
            }
        } 
        else 
        {
            effectTimeoutID = setTimeout(function (){
                effectIntervalID = setInterval(start_effect, effectInterval_s);
                }, effectStartDelay_s);
        }
  });
}

function start_effect(){
    if (isEffectRunning) return; // Prevent overlapping effects
    isEffectRunning = true;

    effectOnID = setInterval(effectOn, effectStartInterval_s);
    setTimeout(function() {
        effectOffID = setInterval(effectOff, effectOffInterval_s);
    }, effectOffDelay_s);

}

function effectOn(){
    if(indexOn<imageIDs.length){
        const img = document.getElementById(imageIDs[indexOn]);
        img.classList.add('effect-on');
        indexOn++;
    }
    else{
        clearInterval(effectOnID);
        indexOn = 0;
    }
}

function effectOff(){
    if(indexOff<imageIDs.length){
        const img = document.getElementById(imageIDs[indexOff]);
        img.classList.remove('effect-on');
        indexOff++;
    }
    else{
        clearInterval(effectOffID);
        indexOff = 0;
        isEffectRunning = false;
    }
}

function monitorIconHovering() {
    images.forEach(images => {
        images.addEventListener('mouseenter', () => {
            clearTimeout(effectTimeoutID);
            clearInterval(effectOnID);
            clearInterval(effectOffID);
            indexOn = 0;
            indexOff = 0;
            if(effectIntervalID){
                clearInterval(effectIntervalID);
                for(let i = 0; i<7; i++){
                    const img = document.getElementById(imageIDs[i]);
                    img.classList.remove('effect-on')
                }
            }
            isEffectRunning = false;
            effectTimeoutID = setTimeout(function (){
                effectIntervalID = setInterval(start_effect, effectInterval_s);
            }, effectStartDelay_s);
        });
    });
}

function overFunc() {
    var copy_btn = document.getElementById("copy_btn_id");
    var copy_btn_img = document.getElementById("copy_btn_img_id");
    copy_btn.innerHTML = "Copy to clipboard";
    copy_btn.style.width = "120px";
}

  function clickFunc(){
    navigator.clipboard.writeText("willstoeff@gmail.com");
    var copy_btn = document.getElementById("copy_btn_id");
    var copy_btn_img = document.getElementById("copy_btn_img_id");
    copy_btn.innerHTML = "Copied!";
    copy_btn.style.width = "60px"; 
    copy_btn_img.src = "images/icons/check.svg";
    setTimeout(function() {
        copy_btn_img.src = "images/icons/copy_btn.svg";
    }, 1000);
}
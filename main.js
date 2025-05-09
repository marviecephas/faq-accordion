document.addEventListener('DOMContentLoaded', function(){
    let body = document.getElementById('main-container')
    let icons = document.getElementsByClassName('content-icon');
    if(!body || !icons){
        console.error('failed to load DOM elements');
        return;
    }
    
    const getHeight = (answer) => {
        let height = 0;
        let display = answer.style.display;
        answer.style.display = "block";
        answerHeight = Number(answer.offsetHeight);
        answer.style.display = (display === "none") ? "none" : "block";
        return answerHeight;
    }
    const toggleAnswer = (questionIcon) => {
        questionIcon.parentNode.nextElementSibling.style.display = (questionIcon.src === "https://github.com/marviecephas/faq-accordion/blob/e7cfeaf21c5997db36452c375eb2079216adb260/icon-plus.svg") ? "block" : "none";
        
        questionIcon.src = (questionIcon.src === "https://github.com/marviecephas/faq-accordion/blob/e7cfeaf21c5997db36452c375eb2079216adb260/icon-plus.svg") ? "https://github.com/marviecephas/faq-accordion/blob/df301b88f2f1701fe65e06793d2da25b6dd7771c/icon-minus.svg" : "https://github.com/marviecephas/faq-accordion/blob/e7cfeaf21c5997db36452c375eb2079216adb260/icon-plus.svg";
        
        let answerHeightToAdd = 0, answerHeightToRemove = 0, height = 0, totalHeight = 0;
        height = getHeight(questionIcon.parentNode.nextElementSibling);
        
        answerHeightToAdd = ((questionIcon.src === "https://github.com/marviecephas/faq-accordion/blob/df301b88f2f1701fe65e06793d2da25b6dd7771c/icon-minus.svg") && (questionIcon.parentNode.nextElementSibling.style.display === "block")) ? height : 0;
        
        answerHeightToRemove = ((questionIcon.src === "https://github.com/marviecephas/faq-accordion/blob/e7cfeaf21c5997db36452c375eb2079216adb260/icon-plus.svg") && (questionIcon.parentNode.nextElementSibling.style.display === "none")) ? -1 * height : 0;
         
        totalHeight = body.offsetHeight + answerHeightToAdd + answerHeightToRemove;  
        body.style.minHeight = `${totalHeight}px`;       
    }
    for (let icon of icons){
        icon.addEventListener('click', function(){toggleAnswer(icon)});
        }
});

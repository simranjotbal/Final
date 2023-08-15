// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
var contact =  document.getElementById('contact-page');
var submit = document.getElementById('submit-button');

submit.addEventListener('click',function(){
    contact.innerHTML = '<p style="font-size: 24px;">Thank you for your message</p>';

});

submit.addEventListener('click',function(){
    contact.innerHTML = '<p class="thank-you-message": 24px;">Thank you for your message</p>';

});
const style  = document.createElement('style');
style.innerHTML = '.thank-you-message { font-size: 24px; }';
document.head.appendChild(style);


// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.


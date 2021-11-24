// default cheermote gif sources
const gray = '<img src="https://static-cdn.jtvnw.net/bits/dark/animated/gray/4">';
const purple = '<img src="https://static-cdn.jtvnw.net/bits/dark/animated/purple/4">';
const green = '<img src="https://static-cdn.jtvnw.net/bits/dark/animated/green/4">';
const blue = '<img src="https://static-cdn.jtvnw.net/bits/dark/animated/blue/4">';
const red = '<img src="https://static-cdn.jtvnw.net/bits/dark/animated/red/4">';

const img1 = '<img src="https://mario.wiki.gallery/images/4/41/Yoshi_and_Baby_Mario_-_Super_Mario_Sticker.gif">';
const img69 = '<img src="https://mario.wiki.gallery/images/5/52/Boo_Shy_-_Super_Mario_Sticker.gif">';

let amount = parseInt('{{amount}}', 10);

let image = '';
if (amount === 1) {
    image = img1;
} else if (amount === 69) {
    image = img69;
} else if (amount < 100) {
    image = gray;
} else if (amount < 1000) {
    image = purple;
} else if (amount < 5000) {
    image = green;
} else if (amount < 10000) {
    image = blue;
} else {
    image = red;
}

let alertText = '';
if (amount === 1) {
    alertText = " cheered just 1 single bit."
} else if (amount === 69) {
    alertText = " cheered 69 bits. Nice."
} else {
    alertText = " cheered " + amount.toString() + " bits!";
}


// set all HTML
document.getElementById('image').innerHTML = image;
document.getElementById('alert-text').innerHTML = alertText;

// this clears out all cheermote animations from the actual text
for (i = 0; i < document.getElementById('user-message').getElementsByTagName('span').length; i++) {
    document.getElementById('user-message').getElementsByTagName('span')[i].innerHTML = '';
}



/* HTML for {{message}}:

<span class="cheermote-1">
    <img class="alertbox-message-emote" alt="ripcheer1" src="https://d3aqoihi2n8ty8.cloudfront.net/actions/ripcheer/dark/animated/1/2.gif"/>
    1
</span>
 RRRRRRRRRRRRRRR

*/
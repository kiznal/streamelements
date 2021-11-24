## Intro

This is a project that contains the code that I used to generate my Twitch alerts, as well as a few other various screens. This is basically a cleaned up version of my StreamLabs alerts, since the StreamElements custom code insertion seems a lot better.


## Description

Most of the code is basic HTML and CSS stuff, should be pretty self-explanitory. Only the sub_script.js is actually complicated. I was able to code variations for bits within cheer_script.js, but for sub varitions, I wasn't sure where find out the type of sub (sub, resub, user gift, community gift(s) ), so I just made a version of the HTML for each variant, and used the same script and css for each.


## Usage

Just copy and paste the data in from these three files into their respective Custom Code text boxes in the StreamElements alerts menus and it should work. Do note that there's actually five custom code fields, and you'll want to delete the code out of all five, then paste the corresponding code into the HTML/CSS/JavaScript boxes and leave the other two blank (I believe they're called Fields and Data or something like that). Or at least, that's what worked best for me.

That's it. Hope this is helpful to anyone who sees it. I especially hope the sub_script.js helps illustrate how one can make some moderately complex animations in JavaScript for some cool alerts. GSAP seems like a solid package that loads in a timely manner and runs pretty smooth.
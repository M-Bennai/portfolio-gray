const workspace = document.querySelector(".workspace");
const titre = document.querySelector(".titre");
const soustitre = document.querySelector(".soustitre")
const description = document.querySelector(".description")
const navbar = document.querySelector("nav");
const workleft = document.querySelector(".workleft");
const langages = document.querySelector(".langages");

const tl = new TimelineMax ();

//tl.fromTo(workspace, 1.5, {width:"0px"}, {width: "580px", ease: Power2.easeInOut})

//tl.fromTo(titre, 1.5, { opacity: 0, x: 30}, {opacity: 1, x: 0} );
//tl.fromTo(soustitre, 1, { opacity: 0, x: 30}, {opacity: 1, x: 0} );

tl.fromTo(description, 2, { opacity: 0, x: -250}, {opacity: 1, x: 0} );
tl.fromTo(workspace, 1, { opacity: 0, x: 30}, {opacity: 1, x: 0} );
tl.fromTo(langages, 1, { opacity: 0, x: 30}, {opacity: 1, x: 0} );

// WORK PAGE

const ml = new TimelineMax();

ml.fromTo(workleft, 2, { opacity: 0, x: 30}, {opacity: 1, x: 0} );


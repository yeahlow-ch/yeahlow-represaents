const voteElement = document.getElementById('vote');
const mapElement = document.getElementById('map-container');

// create a simple instance
// by default, it only adds horizontal recognizers
const mc = new Hammer(voteElement);

// let the pan gesture support all directions.
// this will block the vertical scrolling on a touch-device while on the element
mc.get('pan').set({direction: Hammer.DIRECTION_ALL});

// listen to events...
mc.on("panleft panright panup pandown tap press", function (ev) {
    voteElement.style.display = "none";
    mapElement.style.display = "block";
});
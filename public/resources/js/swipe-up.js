const voteElement = document.getElementById('vote');
const mapElement = document.getElementById('map-container');

// create a simple instance
// by default, it only adds horizontal recognizers
const mc = new Hammer(voteElement);

// let the pan gesture support all directions.
// this will block the vertical scrolling on a touch-device while on the element
mc.get('pan').set({direction: Hammer.DIRECTION_ALL});

// listen to events...
mc.on("panup pandown", function (ev) {
    let position = [47.3901899, 8.5136498]; // Technopark

    navigator.geolocation.getCurrentPosition(p => {
        postVotes(p.coords.latitude, p.coords.longitude, ev.type === 'panup' ? 1 : 0);
    });

    voteElement.style.display = "none";
    mapElement.style.display = "block";
});
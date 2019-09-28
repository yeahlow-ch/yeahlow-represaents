// Get a reference to an element.
var square = document.querySelector('.square');

// Create an instance of Hammer with the reference.
var hammer = new Hammer(square);

// Subscribe to a quick start event: press, tap, or doubletap.
// For a full list of quick start events, read the documentation.
hammer.on('press', function(e) {
    e.target.classList.toggle('expand');
    console.log("You're pressing me!");
    console.log(e);
});
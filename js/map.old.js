include("js/ol/dist/ol.js");

addEventListener("load", function() {
	var mapObject = new Map({
		target: 'mapHolder',
		layers: [
			new TileLayer({
				source: new OSM(),
			}),
		],
		view: new View({
			center: [0, 0],
			zoom: 2,
		}),
	});
});

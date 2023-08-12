// JavaScript source code
// Declare a variable for map
var map;
// Get lattitude and longitude of Canberra Centre
var canberraCentre = new google.maps.LatLng(-35.2792284, 149.1321033);
// Initialise the map
function initMap() {
    // Define the properties for Canberra Centre map
    var canberraMap = {
        center: canberraCentre,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    // Create a map object for Canberra Centre 
    // using canberraMap and the <div> element with id="googleMap"
    map = new google.maps.Map(
        document.getElementById("googleMap"), canberraMap);

    // Add markers below this line
    
    
    addBelluci(map);
    addItalianandSons(map);
    addBluGinger(map);
    addJewelofIndia(map);
    addChairman(map);
    addDicksonAsianNoodleHouse(map);
}
// Add other functions below this line


function addBelluci(map) {
    // Canberra Museum and Gallery
    var Belluci =
        new google.maps.LatLng(-35.319585, 149.13249);
    var markerBelluci = new google.maps.Marker({
        position: Belluci,
    });

    markerBelluci.setMap(map);

    var contentBelluci =
        ' <h1>Belluci Italian</h1>' +
        ' <img src="images/location/bellucis_logo.jpg" ' +
        '      style="float:left; width:40%;  margin-right:10px;">' +
        ' <p>Belluci demonstrates a new concept, a new food philosophy' +
        'the dawn of a new era in Canberra dining. Having been established more than 20 years ago' +
        'Belluci fast became an iconic name in Canberra. To bring you the finest dishes, we have gone back to' +
        'traditional Italian routes, creating simple, rustic food.<br>'+
        '<a style="color:rgba(247, 202, 24, 1)" href="https://bellucis.com.au/home.php">Click here</a>' +
        ' for Belluci Italian website'
        ' </p>';

    var infoBelluci = new google.maps.InfoWindow({
        content: contentBelluci
    });

    google.maps.event.addListener(markerBelluci, 'click',
        function () {
            infoBelluci.open(map, markerBelluci);
        });
}

function addItalianandSons(map){
    var ItalianandSons =
        new google.maps.LatLng(-35.2768246, 149.1341652);
    var markerItalianandSons = new google.maps.Marker({
        position: ItalianandSons,
    });

    markerItalianandSons.setMap(map);

    var contentItalianandSons =
        '<h1>Italian and Sons</h1>' +
        '<img src="images/location/is_logo.jpg" style="float:left; width:40%;  margin-right:10px;">' +
        '<p>"A casual Italian trattoria that specialises in wood fired pizzas such as Rucola with Prosciutto di Parma, rucola & reggiano.' +
        'Do not miss daily changing main dishes of the day such as their wood roast suckling pig, rosemary, garlic, baked baby fennel & mustard fruits." Australian Good Food Guide.<br>' +
        '<a style="color:rgba(247, 202, 24, 1)" href="http://italianandsons.com.au/">Click here</a> for Italian and Sons Website' +
        '</p>';
    var infoItalianandSons = new google.maps.InfoWindow({
        content: contentItalianandSons
    });

    google.maps.event.addListener(markerItalianandSons, 'click',
        function () {
            infoItalianandSons.open(map, markerItalianandSons);
        });
}

function addBluGinger(map) {
    // Canberra Museum and Gallery
    var BluGinger =
        new google.maps.LatLng(-35.277063, 149.132014);
    var markerBluGinger = new google.maps.Marker({
        position: BluGinger,
    });

    markerBluGinger.setMap(map);

    var contentBluGinger =
        ' <h1>Blu Ginger</h1>' +
        ' <img src="images/location/bluginger_logo.jpg" ' +
        '      style="float:left; width:40%;  margin-right:10px;">' +
        ' <p>"At Blu Ginger we use only the freshest locally sourced produce, combined with authentic spices imported directly from the sub-continent,'+ 
        'to offer classic, traditional recipes with a modern twist, creating a unique and memorable dining experience for you."<br>' +
        '<a style="color:rgba(247, 202, 24, 1)" href="http://www.bluginger.com.au/">Click here</a>' +
        ' for Blu Ginger website'+
        ' </p>';

    var infoBluGinger = new google.maps.InfoWindow({
        content: contentBluGinger
    });

    google.maps.event.addListener(markerBluGinger, 'click',
        function () {
            infoBluGinger.open(map, markerBluGinger);
        });
}

function addJewelofIndia(map) {
    // Canberra Museum and Gallery
    var JewelofIndia =
        new google.maps.LatLng(-35.320576, 149.1328271);
    var markerJewelofIndia = new google.maps.Marker({
        position: JewelofIndia,
    });

    markerJewelofIndia.setMap(map);

    var contentJewelofIndia =
        ' <h1>Jewel of India</h1>' +
        ' <img src="images/location/jewel_logo.jpg" ' +
        '      style="float:left; width:40%;  margin-right:10px;">' +
        ' <p>"Finding a balance between dishes inspired by authentic recipes and creating a modern take on classic cuisine sees a loyal following of Canberra locals returning for a mouth-watering feast.'+
        '" Australian Good Food Guide Website."<br>' +
        '<a style="color:rgba(247, 202, 24, 1)" href="http://www.jewelofindia.com.au/">Click here</a>' +
        ' for Jewel of India Website' +
        ' </p>';

    var infoJewelofIndia = new google.maps.InfoWindow({
        content: contentJewelofIndia
    });

    google.maps.event.addListener(markerJewelofIndia, 'click',
        function () {
            infoJewelofIndia.open(map, markerJewelofIndia);
        });
}

function addChairman(map) {
    // Canberra Museum and Gallery
    var Chairman =
        new google.maps.LatLng(-35.3116472, 149.1339129);
    var markerChairman = new google.maps.Marker({
        position: Chairman,
    });

    markerChairman.setMap(map);

    var contentChairman =
        ' <h1>Chairman & Yip</h1>' +
        ' <img src="images/location/chairman_logo.jpg" ' +
        '      style="float:left; width:40%;  margin-right:10px;">' +
        ' <p>"The Chairman & Yip has become one of Canberra’s longest standing and most highly regarded institutions, having received numerous awards over the years,'+
        '  offering an ever consistent and professional quality of service for corporate dining, conferences and presentations.<br>'+
        '<a style="color:rgba(247, 202, 24, 1)" href="http://chairmangroup.com.au/chairmanyip/">Click here</a>'+
        ' for Chairman & Yip Website' +
        ' </p>';

    var infoChairman = new google.maps.InfoWindow({
        content: contentChairman
    });

    google.maps.event.addListener(markerChairman, 'click',
        function () {
            infoChairman.open(map, markerChairman);
        });
}

function addDicksonAsianNoodleHouse(map) {
    // Canberra Museum and Gallery
    var DicksonAsianNoodleHouse =
        new google.maps.LatLng(-35.2503268, 149.1364261);
    var markerDicksonAsianNoodleHouse = new google.maps.Marker({
        position: DicksonAsianNoodleHouse,
    });

    markerDicksonAsianNoodleHouse.setMap(map);

    var contentDicksonAsianNoodleHouse =
        ' <h1>Chairman & Yip</h1>' +
        ' <img src="images/location/noodle_logo.jpg" ' +
        '      style="float:left; width:40%;  margin-right:10px;">' +
        ' <p>"The Dickson Asian Noodle House specialises in traditional Malaysian, Thai and Lao cuisine.'+
        ' The dining atmosphere is casual and cosy providing for a la carte dining, banquets and take away." <br>' +
        '<a style="color:rgba(247, 202, 24, 1)" href="https://www.facebook.com/pages/Dickson-Asian-Noodle-House/156690017692038 ">Click here</a>' +
        ' for Dickson Asian Noodle House Website' +
        ' </p>';

    var infoDicksonAsianNoodleHouse = new google.maps.InfoWindow({
        content: contentDicksonAsianNoodleHouse
    });

    google.maps.event.addListener(markerDicksonAsianNoodleHouse, 'click',
        function () {
            infoDicksonAsianNoodleHouse.open(map, markerDicksonAsianNoodleHouse);
        });
}

// Add a DOM listener that will execute the initMap function 
// on window load (when the page is loaded)
google.maps.event.addDomListener(window, 'load', initMap);


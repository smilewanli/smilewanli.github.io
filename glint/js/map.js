// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = { lat: 22.928614, lng: 120.181826 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 17, center: uluru });
    // The marker, positioned at Uluru
    var marker_position = {
        drink: { lat: 22.925842, lng: 120.182303, title: '灣裡303茶飲店'},
        tutofish: { lat: 22.923150, lng: 120.183252 ,title: '𩵚魠魚焿'},
        goat: { lat: 22.924498, lng: 120.184587, title: '咩灣里羊肉店' },
        duck: { lat: 22.923663, lng: 120.183582, title: '美月鴨肉飯'  },
        yahome: { lat: 22.923667, lng: 120.183174, title: '葉家水煎包' },
        firetown: { lat: 22.931472, lng: 120.183142, title: '火城麵店' },
        ginfu: { lat: 22.924735, lng: 120.182923, title: '京富號萬年富粿' },
        lin: { lat: 22.925088, lng: 120.182779, title: '林記糕鴨店' },
        cake: { lat: 22.925742, lng: 120.182184, title: '一味香餅舖' },
        coffee: { lat: 22.927173, lng: 120.181031, title: '88巷弄咖啡' },
        beaf: { lat: 22.928612, lng: 120.182022, title: '陳記牛肉湯'  }
    }

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i]['lat'], locations[i]['lng']),
            map: map
        });
    }
}

var locations = [
    { lat: 22.925842, lng: 120.182303 },
    { lat: 22.923150, lng: 120.183252 },
    { lat: 22.924498, lng: 120.184587 },
    { lat: 22.923663, lng: 120.183582 },
    { lat: 22.923667, lng: 120.183174 },
    { lat: 22.931472, lng: 120.183142 },
    { lat: 22.924735, lng: 120.182923 },
    { lat: 22.925088, lng: 120.182779 },
    { lat: 22.925742, lng: 120.182184 },
    { lat: 22.927173, lng: 120.181031 },
    { lat: 22.928612, lng: 120.182022 }
]

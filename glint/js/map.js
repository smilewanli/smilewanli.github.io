// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = { lat:  22.925088, lng: 120.182303 }
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 16, center: uluru })

    // Multiple Marker
    var marker, i
    var infowindow = new google.maps.InfoWindow();

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i]['lat'], locations[i]['lng']),
            map: map
        });
    
        google.maps.event.addListener(marker, 'click',((marker, i)=>{
            return () => {
                infowindow.setContent(locations[i]['title'] + locations[i]['info']);
                infowindow.open(map, marker)}
        })(marker, i))
    }
    
}

var locations = [
    {
        lat: 22.925842, lng: 120.182303, title: '<h1>'+'灣裡303茶飲店'+'</h1>', info: 
            '<div>' + '<p class="lead">地點：台南市南區灣裡路303號</br>電話：06-262-1508</p>'+
            '<p>清爽解膩的飲料，在夏天帶給你無限甜蜜。</p>'+
            '<img id="food-image" src="images/food/303drink1.jpg" alt="drink">'+'</div>'
    },
    {
        lat: 22.923150, lng: 120.183252, title: '<h1>' + '𩵚魠魚焿' + '</h1>', info:
            '<div>' + '<p class="lead">地點：台南市南區灣裡路464號</br>電話：06-262-8120</p>' +
            '<p>土魠魚塊油炸火候掌握的恰到好處外酥內嫩且無魚腥味，</br>分量充足價格實在湯頭鮮，虱目魚羹也是非常鮮甜美味。</p>' +
            '<img  id="food-image" src="images/food/tu-tuo-fish1.jpg" alt="fish">' + '</div>'
    },
    {
        lat: 22.924498, lng: 120.184587, title: '<h1>' + '咩灣里羊肉店' + '</h1>', info:
            '<div>' + '<p class="lead">地點：台南市南區興南街36號</br>電話：06-296-0764</p>' +
            '<p>傳承了三代超過六十年的好味道，羊肉特別選用最好吃的小羔羊，</br>主打清燉口味，讓客人吃到羊肉的自然清甜。</p>' +
            '<img  id="food-image" src="images/food/mutton-restaurant1.jpg" alt="sheep">' + '</div>'
    },
    {
        lat: 22.923663, lng: 120.183582, title: '<h1>' + '美月鴨肉飯' + '</h1>', info:
            '<div>' + '<p class="lead">地點：台南市南區興南街57-1號</br>電話：06-296-3156</p>' +
            '<p>銅板價的美味鴨肉飯，經濟實惠，受附近居民喜愛。</p>' +
            '<img  id="food-image" src="images/food/mei-yue1.jpg" alt="duck">' + '</div>'
    },
    {
        lat: 22.923667, lng: 120.183174, title: '<h1>' + '葉家水煎包' + '</h1>', info:
            '<div>' + '<p class="lead">地點：台南市南區灣裡路 444 號</br>電話：06-262-1043</p>' +
            '<p>馬路旁販售的水煎包，外表金黃酥脆，內餡飽滿多汁。</br>另外也有販售煎餃、碗粿以及味噌湯，農曆十五也販售大腸，為灣裡在地好味道。</p>' +
            '<img id="food-image" src="images/food/ye-home1.jpg" alt="bao">' + '</div>'
    },
    {
        lat: 22.931472, lng: 120.183142, title: '<h1>' + '火城麵店' + '</h1>', info:
            '<div>' + '<p class="lead">地點：台南市南區灣裡路 404 號</br>電話：06-262-2567</p>' +
            '<p>九母魚酥，是一種很多刺的魚，可以吃到細細小小的刺但是不會被刺傷，</br>且海鮮味十足。</br>而綜合焿內有虱目魚皮、大腸皮、魚酥、魚丸，</br>可以一次吃到所有店裡的招牌，非常美味。</p>' +
            '<img id="food-image"src="images/food/tu-tuo-fish1.jpg" alt="tu-tuo-fish">' + '</div>'
    },
    {
        lat: 22.924735, lng: 120.182923, title: '<h1>' + '京富號萬年富粿' + '</h1>', info:
            '<div>' + '<p class="lead">地點：台南市南區灣裡路 353 號</br>電話：0931-998-005</p>' +
            '<p>碗粿帶有粽葉的香味，味道上沒有甚麼特別突出，</br>田雞湯很特別，利用蒜頭還去除田雞的味道。</p>' +
            '<img id="food-image"src="images/food/thousandyear.jpg" alt="soup">' + '</div>'
    },
    {
        lat: 22.925088, lng: 120.182779, title: '<h1>' + '林記糕鴨店' + '</h1>', info:
            '<div>' + '<p class="lead">地點：台南市南區灣裡路 341 號</br>電話：06-262-5749</p>' +
            '<p>當歸鴨麵線吃起來當歸味十足，鴨肉也很好吃，煮得夠軟，</br>而米糕，比較不甜，偏鹹，但是飯煮夠嫩軟，</br>淋上的滷肉也滷得夠味。</p>' +
            '<img id="food-image"src="images/food/lin-ji1.jpg" alt="duck">' + '</div>'
    },
    {
        lat: 22.925742, lng: 120.182184, title: '<h1>' + '一味香餅舖' + '</h1>', info:
            '<div>' + '<p class="lead">地點：台南市南區灣裡路 338 號</br>電話：06-262-2346</p>' +
            '<p>外表非常有古早味，傳統便宜的一家餅店。</p>' +
            '<img id="food-image"src="images/food/onewaysmell.jpg" alt="flower">' + '</div>'
    },
    {
        lat: 22.927173, lng: 120.181031, title: '<h1>' + '88巷弄咖啡' + '</h1>', info:
            '<div>' + '<p class="lead">地點：台南市南區灣裡路 88 巷 300 號 - 2號</br>電話：06-262-7823</p>' +
            '<p>古早家庭式咖啡廳，在地人聊天、聚會的場所。</br>推薦給想體會小城鎮的寧靜及熱情的客人。</p>' +
            '' + '</div>'
    },
    {
        lat: 22.928612, lng: 120.182022, title: '<h1>' + '陳記牛肉湯' + '</h1>', info:
            '<div>' + '<p class="lead">地點：台南市南區灣裡路灣里市場</br>電話：0972-008-805</p>' +
            '<p>市場中的美味牛肉湯，湯頭鮮甜，肉片有厚度且給料多，</br>當地居民表示，陳記牛肉湯為台南數一數二的牛肉湯。</p>' +
            '<img id="food-image"src="images/food/beefsoup.jpg" alt="beef">' + '</div>'
    }
]

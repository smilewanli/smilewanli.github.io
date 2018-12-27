function getLocation() {
    var options = {
        enableHighAccuracy : true,
        maximumAge : 1000
    }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
    } else {
        alert('瀏覽器不支援定位');
    }
}

function onSuccess(position) {
    //经度
    var longitude = position.coords.longitude;
    //纬度
    var latitude = position.coords.latitude;
    alert('目前 經度:' + longitude + '，緯度' + latitude);
    
}
function onError(error) {
    switch (error.code) {
        case 1:
            alert("定位被拒絕");
            break;
        case 2:
            alert("暫時無法定位");
            break;
        case 3:
            alert("獲取訊息超時");
            break;
        case 4:
            alert("未知錯誤");
            break;
    }
    
    //经度
    var longitude = 23.1823780000;
    //纬度
    var latitude = 113.4233310000;

}

window.onload = function(){
    // html5获取地理位置
    getLocation();
};
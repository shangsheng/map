/**
 * zIndex1:展示层图层次数
 * zIndex2:路况图层次数
 * Longitude：经度，
 * latitude: 纬度
 * */
function execution(zIndex1,zIndex2,Longitude,latitude){
var marker, map = new AMap.Map('map', {
        resizeEnable: true,
        zoom:zIndex1,
        center: [Longitude,latitude]//中心经纬度116.397428, 39.90923
 });
  // 实例化点标记
    function addMarker(Longitude,latitude) {
        if (marker) {
            return;
        }
        marker = new AMap.Marker({
            icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
            position: [Longitude,latitude]//标记点显示的经纬度
        });
        marker.setMap(map);
    }
function updateMarker(Longitude,latitude) {
        // 自定义点标记内容
        var markerContent = document.createElement("div");
		markerContent.className="mapAddress";
        // 点标记中的图标
        var markerImg = document.createElement("img");
        markerImg.className = "markerlnglat";
        markerImg.id="markerlnglat";
        markerImg.src = "http://webapi.amap.com/theme/v1.3/markers/n/mark_r.png";
        markerContent.appendChild(markerImg);
  // 点标记中的文本
  		var markerDiv = document.createElement("div");
  		markerDiv.className = 'geographical';
  		markerDiv.id = 'geographical';
  		var markerH1 = document.createElement("h1");
  		markerH1.className = "address";
  		markerH1.innerHTML = "公司名称"
  		var markerI = document.createElement("i");
        markerI.className = 'markerI';
        markerH1.appendChild(markerI);
  		markerDiv.appendChild(markerH1);
        var markerSpan = document.createElement("span");
        markerSpan.className = 'marker';
        markerSpan.innerHTML = "公司地址";
        markerDiv.appendChild(markerSpan);
        markerContent.appendChild(markerDiv);
        marker.setContent(markerContent); //更新点标记内容
        marker.setPosition([Longitude,latitude]); //更新点标记位置
   }
//简单信息窗体
	//JSAPI回调入口
	function my_init() {
	       initAMapUI(); //这里调用initAMapUI初始化
	       //其他逻辑
	       AMapUI.loadUI(['overlay/SimpleInfoWindow'], function(SimpleInfoWindow) {

		    var infoWindow = new SimpleInfoWindow({
		        infoTitle: '<strong>这里是标题</strong>',
		        infoBody: '<p>这里是内容。</p>'
		    });
		
		    //显示在map上
		    infoWindow.open(map, map.getCenter());
		});
	}
//	路况
function condition(zIndex2){
	//实时路况图层
    var trafficLayer = new AMap.TileLayer.Traffic({
        zIndex: zIndex2
    });
    trafficLayer.setMap(map);
	var isVisible = false;
	trafficLayer.hide();//隐藏路况
    AMap.event.addDomListener(document.getElementById('lukuan'), 'click', function() {
        if (isVisible) {
            trafficLayer.hide();
            isVisible = false;
        } else {
            trafficLayer.show();
            isVisible = true;
        }
    }, false);
}
//放大缩小控件
function bigSmall(){
	AMapUI.loadUI(['control/BasicControl'], function(BasicControl) {
	
	  //缩放控件
	  map.addControl(new BasicControl.Zoom({
	      position: 'lt', //left top，左上角
	      showZoomNum: true //显示zoom值
	  }));
	
	  //图层切换控件
	  map.addControl(new BasicControl.LayerSwitcher({
	      position: 'rt' //right top，右上角
	  }));
	
	  //实时交通控件
//	  map.addControl(new BasicControl.Traffic({
//	      position: 'lb'//left bottom, 左下角
//	  }));
	});
}

	addMarker(116.397428, 39.90923);
	updateMarker(116.397428, 39.90923);
	my_init();
	condition(10);
	bigSmall();
}
execution(11,10,116.397428, 39.90923);
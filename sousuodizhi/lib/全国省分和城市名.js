//全国按省份和城市份的分类对象
var national={
	//按省份
save:{
	"A":{
		"安徽"   :['合肥','芜湖','蚌埠','淮南','马鞍山','淮北','铜陵','安庆','黄山','滁州','阜阳','宿州','六安','亳州','池州','宣城'],
		"澳门 "  :["花地玛堂区","圣安多尼堂区","大堂区","望德堂区","风顺堂区"]/*,"氹仔","路环"*/
		},
	"B":{"北京"  :["东城","西城","朝阳","丰台","石景山","海淀","门头沟","房山","通州","顺义","昌平","大兴","平谷","怀柔","密云","延庆"]},
	"C":{
		"重庆"  :["万州","涪陵","渝中","大渡口","江北","沙坪坝","九龙坡","南岸","北碚","两江新区","万盛","双桥","渝北","巴南","长寿","綦江","潼南","铜梁","大足","荣昌",
					"璧山","梁平","城口","丰都","垫江","武隆","忠县","开县","云阳","奉节","巫山","巫溪","黔江","石柱","秀山","酉阳","彭水","江津","合川","永川","南川"]
		},
	"F":{"福建"   :["福州","厦门","莆田","三明","泉州","漳州","南平","龙岩","宁德"]},
	"G":{"广东 "  :["广州","韶关","深圳","珠海","汕头","佛山","江门","湛江","茂名","肇庆","惠州","梅州","汕尾","河源","阳江","清远","东莞","中山","潮州","揭阳","云浮"],
		 "广西 "  :["南宁","柳州","桂林","梧州","北海","防城港","钦州","贵港","玉林","百色","贺州","河池","来宾","崇左"],
		 "贵州 "  :["贵阳","六盘水","遵义","安顺","铜仁","黔西南","毕节","黔东南","黔南"],
		 "甘肃 "  :["兰州市","嘉峪关","金昌","白银","天水","武威","张掖","平凉","酒泉","庆阳","定西","陇南","临夏","甘南"] ,
		},
	"H":{
		 "河北"  :["石家庄","唐山","秦皇岛","邯郸","邢台","保定","张家口","承德","沧州","廊坊","衡水"],
		 "黑龙江":["哈尔滨","齐齐哈尔","鸡西","鹤岗","双鸭山","大庆","伊春","佳木斯","七台河","牡丹江","黑河","绥化","大兴安岭"],
		 "河南"  :["郑州","开封","洛阳","平顶山","安阳","鹤壁","新乡","焦作","濮阳","许昌","漯河","三门峡","南阳","商丘","信阳","周口","驻马店","济源"],
		 "湖北"  :["武汉","黄石","十堰","宜昌","襄阳","鄂州","荆门","孝感","荆州","黄冈","咸宁","随州","恩施","仙桃","潜江","天门","神农架"],
		 "湖南"  :["长沙","株洲","湘潭","衡阳","邵阳","岳阳","常德","张家界","益阳","郴州","永州","怀化","娄底","湘西"],
		 "海南"  :["海口","三亚","三沙","五指山","琼海","儋州","文昌","万宁","东方","定安","屯昌","澄迈","临高","白沙","昌江","乐东","陵水","保亭","琼中"]  
		},
	"J":{
		 "吉林"  :["长春","吉林","四平","辽源","通化","白山","松原","白城","延边"],
		 "江苏"  :["南京","无锡","徐州","常州","苏州","南通","连云港","淮安","盐城","扬州","镇江","泰州","宿迁"],
		 "江西"  :["南昌","景德镇","萍乡","九江","新余","鹰潭","赣州","吉安","宜春","抚州","上饶"]
		},
	"L":{"辽宁"  :["沈阳","大连","鞍山","抚顺","本溪","丹东","锦州","营口","阜新","辽阳","盘锦","铁岭","朝阳","葫芦岛"]},
	"N":{
		"内蒙古" :["呼和浩特","包头","乌海","赤峰","通辽","鄂尔多斯","呼伦贝尔","巴彦淖尔","乌兰察布","兴安","锡林郭勒","阿拉善"],
		"宁夏"   :["银川","石嘴山","吴忠","固原","中卫"]  
		},
	"Q":{"青海 " :["西宁","海东","海北藏族自治州","黄南藏族自治州","海南藏族自治州","果洛藏族自治州","玉树藏族自治州","海西蒙古族藏族自治州"]},
	"S":{"山西"  :["太原","大同","阳泉","长治","晋城","朔州","晋中","运城","忻州","临汾","吕梁"],
		 "山东"  :["济南","青岛","淄博","枣庄","东营","烟台","潍坊","济宁","泰安","威海","日照","莱芜","临沂","德州","聊城","滨州","菏泽"],
		 "四川"  :["成都","自贡","攀枝花","泸州","德阳","绵阳","广元","遂宁","内江","乐山","南充","眉山","宜宾","广安","达州","雅安","巴中","资阳","阿坝","甘孜","凉山"],
		 "陕西"  :["西安","铜川","宝鸡","咸阳","渭南","延安","汉中","榆林","安康","商洛"],
		 "上海"  :["黄浦","卢湾","徐汇","长宁","静安","普陀","闸北","虹口","杨浦","闵行","宝山","嘉定","浦东新区","金山","松江","奉贤","青浦","崇明"] 
		},
	"T":{
		 "天津"  :["和平","河东","河西","南开","河北","红桥","滨海新区","东丽","西青","津南","北辰","宁河","武清","静海","宝坻","蓟县"],
		 "台湾"  :["台北市","高雄市","基隆市","台中市","台南市","新竹市","嘉义市","台北县","宜兰县","桃园县","新竹县","苗栗县","台中县","彰化县","南投县","云林县","嘉义县","台南县","高雄县","屏东县","台东县","花莲县","澎湖县"]
		},
	"X":{
		"西藏"  :["拉萨","昌都","山南","日喀则","那曲","阿里","林芝"],
		"新疆"  :["乌鲁木齐","克拉玛依","吐鲁番","哈密","昌吉回族自治州","博尔塔拉蒙古自治州","巴音郭楞蒙古自治州","阿克苏","克孜勒苏柯尔克孜自治州","喀什","和田",
					"伊犁哈萨克自治州","塔城","阿勒泰","石河子","阿拉尔","图木舒克","五家渠","北屯"],
		"香港"  :["中西区","东区","九龙城区","观塘区","南区","深水埗区","黄大仙区","湾仔区","油尖旺区","离岛区","葵青区","北区","西贡区","沙田区","屯门区","大埔区","荃湾区","元朗区"] 
		},
	"Y":{
		"云南"  :["昆明","曲靖","玉溪","保山","昭通","丽江","普洱","临沧","楚雄彝族自治州","红河哈尼族彝族自治州","文山壮族苗族自治州","西双版纳傣族自治州",
				  "大理白族自治州","德宏傣族景颇族自治州","怒江傈僳族自治州","迪庆藏族自治州"]
	},
	"Z":{"浙江"  :["杭州","宁波","温州","嘉兴","湖州","绍兴","金华","衢州","舟山","台州","丽水"]}
	
},
//按城市
citys:{
	"A":["阿坝","阿拉善","阿里","安康","安庆","鞍山","安顺","安阳","澳门"],
	"B":["北京","白银", "保定","宝鸡","保山","包头","巴中","北海","蚌埠","本溪","毕节","滨州","百色","亳州"],
	"C":["重庆","成都","长沙","长春","沧州","常德","昌都","长治","常州","巢湖","潮州","承德","郴州","赤峰","池州","崇左","楚雄","滁州","朝阳"],
	"D":["大连","东莞","大理","丹东","大庆",  "大同","大兴安岭","德宏","德阳","德州","定西","迪庆","东营"],
	"E":["鄂尔多斯","恩施","鄂州"],
	"F":["福州","防城港","佛山","抚顺","抚州","阜新","阜阳"],
	"G":["广州","桂林","贵阳","甘南","赣州","甘孜","广安","广元","贵港","果洛"],
	"H":["杭州","哈尔滨","合肥","海口","呼和浩特","海北","海东","海南","海西","邯郸","汉中","鹤壁","河池","鹤岗","黑河","衡水","衡阳",  
		"河源","贺州","红河","淮安","淮北","怀化","淮南","黄冈","黄南","黄山","黄石","惠州","葫芦岛","呼伦贝尔","湖州","菏泽"],
	"J":["济南","佳木斯","吉安","江门","焦作","嘉兴","嘉峪关","揭阳","吉林","金昌","晋城","景德镇","荆门","荆州","金华","济宁","晋中","锦州","九江",  "酒泉"],
	"K":["昆明","开封","L","兰州","拉萨","来宾","莱芜","廊坊","乐山","凉山","连云港",
            "聊城","辽阳","辽源","丽江","临沧","临汾","临夏","临沂","林芝","丽水","六安","六盘水",  
            "柳州","陇南","龙岩","娄底","漯河","洛阳","泸州","吕梁"],
    "M":["马鞍山","茂名","眉山","梅州","绵阳","牡丹江"],
    "N":["南京","南昌","南宁","宁波","南充","南平","南通","南阳","那曲","内江","宁德","怒江"],
    "P":["盘锦","攀枝花","平顶山","平凉","萍乡","莆田","濮阳"],
    "Q":["青岛","黔东南","黔南","黔西南","庆阳","清远","秦皇岛","钦州","齐齐哈尔","泉州","曲靖","衢州"],
    "R":["日喀则","日照"],
    "S":["上海","深圳","苏州","沈阳","石家庄","三门峡","三明","三亚","商洛","商丘","上饶",
            "山南","汕头","汕尾","韶关","绍兴","邵阳","十堰","朔州","四平","绥化","遂宁","随州","宿迁",  
            "宿州"],
    "T":["天津","太原","泰安","泰州","台州","唐山","天水","铁岭","铜川","通化","通辽","铜陵","铜仁","台湾"],
    "W":["武汉","乌鲁木齐","无锡","威海","潍坊","文山","温州","乌海","芜湖","乌兰察布","武威","梧州"],
    "X":["厦门","西安","西宁","襄樊","湘潭","湘西","咸宁","咸阳","孝感",
            "邢台","新乡","信阳","新余","忻州","西双版纳","宣城","许昌","徐州","香港","锡林郭勒","兴安"],
    "Y":["银川","雅安","延安","延边","盐城","阳江","阳泉","扬州","烟台","宜宾","宜昌","宜春",  
            "营口","益阳","永州","岳阳","榆林","运城","云浮","玉树","玉溪","玉林"],
    "Z":["杂多县","赞皇县","枣强县","枣阳市","枣庄","泽库县","增城市","曾都区","泽普县","泽州县","札达县","扎赉特旗",  
            "扎兰屯市","扎鲁特旗","扎囊县","张北县","张店区","章贡区","张家港","张家界","张家口","漳平市",  
            "漳浦县","章丘市","樟树市","张湾区","彰武县","漳县","张掖","漳州","长子县","湛河区","湛江",  
            "站前区","沾益县","诏安县","召陵区","昭平县","肇庆","昭通","赵县","昭阳区","招远市","肇源县",  
            "肇州县","柞水县","柘城县","浙江","镇安县","振安区","镇巴县","正安县","正定县","正定新区",  
            "正蓝旗","正宁县","蒸湘区","正镶白旗","正阳县","郑州","镇海区","镇江","浈江区","镇康县",  
            "镇赉县","镇平县","振兴区","镇雄县","镇原县","志丹县","治多县","芝罘区","枝江市",  
            "芷江侗族自治县","织金县","中方县","中江县","钟楼区","中牟县","中宁县","中山","中山区",  
            "钟山区","钟山县","中卫","钟祥市","中阳县","中原区","周村区","周口","周宁县","舟曲县","舟山",  
            "周至县","庄河市","诸城市","珠海","珠晖区","诸暨市","驻马店","准格尔旗","涿鹿县","卓尼",  
            "涿州市","卓资县","珠山区","竹山县","竹溪县","株洲","株洲县","淄博","子长县","淄川区","自贡",  
            "秭归县","紫金县","自流井区","资溪县","资兴市","资阳"] 
}
}

  
  
  
 
  
  
  
  
 
  
 
  
            
            
            
            
            
            
            
            
             
            
             
  

  

  
  
  

  
  
  
  
 
  
  
  
  
  
 
 
  
  
  
 
  

  
  
  
 
  


 

  
 
  
  
  
  
  
  
 
  
  
  
  

  

  
  
  
  
  
 
  
  
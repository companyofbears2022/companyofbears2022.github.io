

window.onload = function () {
	

	
var devlog=["第一赛季正式开启！","2023-06-11","../devlog/20230611.html","v0.3.0更新内容","2023-06-09","../devlog/20230609.html","历史对抗模式","2023-06-03","../devlog/20230603.html","更多的音效","2023-5-29","../devlog/2023529.html","东德即将加入战斗！","2023-5-20","../devlog/2023520.html"];

//'109●用户6●80●用户5';
//var dat=
var EGLRank=["1","腐败"];

var WGRank=["2","Fortress0019","2","UMP9","1","666","1","༒柏光影༒","1","守住","1","张自忠"];

var SVTRank=["1","测试"];
/*["109","用户5606","97","用户607","85","用户102","80","用户7763","69","用户596","69","用户3323","64","用户4399","63","用户0001","109","用户5606","109","用户5606","97","用户607","85","用户102","80","用户7763","69","用户596","69","用户3323","64","用户4399","63","用户0001","109","用户5606","109","用户5606","97","用户607","85","用户102","80","用户7763","69","用户596","69","用户3323","64","用户4399","63","用户0001","109","用户5606","109","用户5606","109","用户5606","109","用户5606"];
*/
var EGRank=["1","测试"];
//["109","用户5606","97","用户607","85","用户102","80","用户7763","69","用户596","69","用户3323","64","用户4399","63","用户0001","109","用户5606","109","用户5606","97","用户607","85","用户102","80","用户7763","69","用户596","69","用户3323","64","用户4399","63","用户0001","109","用户5606","109","用户5606","97","用户607","85","用户102","80","用户7763","69","用户596","69","用户3323","64","用户4399","63","用户0001","109","用户5606","109","用户5606","109","用户5606","109","用户5606"];

var USARank=["1","测试"];
//["109","用户5606","97","用户607","85","用户102","80","用户7763","69","用户596","69","用户3323","64","用户4399","63","用户0001","109","用户5606","109","用户5606","97","用户607","85","用户102","80","用户7763","69","用户596","69","用户3323","64","用户4399","63","用户0001","109","用户5606","109","用户5606","97","用户607","85","用户102","80","用户7763","69","用户596","69","用户3323","64","用户4399","63","用户0001","109","用户5606","109","用户5606","109","用户5606","109","用户5606"];

var TOTRank=["2","Fortress0019","2","UMP9","1","666","1","༒柏光影༒","1","守住","1","张自忠","1","腐败"]

var template1 ='';
var root = document.querySelector(".devlog");
for(var i=0;i<devlog.length;i=i+3) {
	template1 += `<div class="devlog-line"><p>■</p><a href="${devlog[i+2]}">${devlog[i]}</a><div class="time">${devlog[i+1]}</div></div>`;
	}
	appendList(root,template1);
	

/* 英国段位 */
var template2 ='';
var root1 = document.querySelector("#EGLTbody");
for(var i=0;i<EGLRank.length;i=i+2) {
	template2 += `<tr><td class="rank"><svg class="icon svg-icon rank-icon" aria-hidden="true"><use xlink:href="#icon-yingguo_c"></use></svg> <span class="pos">${(i/2)+1}</span></td><td>${EGLRank[i]}</td><td>${Math.floor(EGLRank[i]/5)>=10?Math.floor(EGLRank[i]/10):Math.floor(EGLRank[i]/5)}段</td><td>${EGLRank[i+1]}</td></tr>`
	}
	appendList(root1,template2);
	
/* 西德段位 */
var template3 ='';
var root2 = document.querySelector("#WGTbody");
for(var i=0;i<WGRank.length;i=i+2) {
	template3 += `<tr><td class="rank"><svg class="icon svg-icon rank-icon" aria-hidden="true"><use xlink:href="#icon-xide"></use></svg> <span class="pos">${(i/2)+1}</span></td><td>${WGRank[i]}</td><td>${Math.floor(WGRank[i]/5)>=10?Math.floor(WGRank[i]/10):Math.floor(WGRank[i]/5)}段</td><td>${WGRank[i+1]}</td></tr>`
	}
	appendList(root2,template3);

/* 苏联段位 */
var template4 ='';
var root3= document.querySelector("#SVTTbody");
for(var i=0;i<SVTRank.length;i=i+2) {
	template4 += `<tr><td class="rank"><svg class="icon svg-icon rank-icon" aria-hidden="true"><use xlink:href="#icon-sulian"></use></svg> <span class="pos">${(i/2)+1}</span></td><td>${SVTRank[i]}</td><td>${Math.floor(SVTRank[i]/5)>=10?Math.floor(SVTRank[i]/10):Math.floor(SVTRank[i]/5)}段</td><td>${SVTRank[i+1]}</td></tr>`
	}
	appendList(root3,template4);
	
/* 东德段位 */
var template5 ='';
var root4 = document.querySelector("#EGTbody");
for(var i=0;i<EGRank.length;i=i+2) {
	template5 += `<tr><td class="rank"><svg class="icon svg-icon rank-icon" aria-hidden="true"><use xlink:href="#icon-dongde_c"></use></svg> <span class="pos">${(i/2)+1}</span></td><td>${EGRank[i]}</td><td>${Math.floor(EGRank[i]/5)>=10?Math.floor(EGRank[i]/10):Math.floor(EGRank[i]/5)}段</td><td>${EGRank[i+1]}</td></tr>`
	}
	appendList(root4,template5);

/* 美国段位 */
var template6 ='';
var root5 = document.querySelector("#USATbody");
for(var i=0;i<USARank.length;i=i+2) {
	template6 += `<tr><td class="rank"><svg class="icon svg-icon rank-icon" aria-hidden="true"><use xlink:href="#icon-meiguo"></use></svg> <span class="pos">${(i/2)+1}</span></td><td>${USARank[i]}</td><td>${Math.floor(USARank[i]/5)>=10?Math.floor(USARank[i]/10):Math.floor(USARank[i]/5)}段</td><td>${USARank[i+1]}</td></tr>`
	}
	appendList(root5,template6);
	
/* 总段位 */
var template7 ='';
var root6 = document.querySelector("#TOTTbody");
for(var i=0;i<TOTRank.length;i=i+2) {
	template7 += `<tr><td class="rank"><span class="pos">${(i/2)+1}</span></td><td>${TOTRank[i]}</td><td>${Math.floor(TOTRank[i]/5)>=10?Math.floor(TOTRank[i]/10):Math.floor(TOTRank[i]/5)}段</td><td>${TOTRank[i+1]}</td></tr>`
	}
	appendList(root6,template7);
	
function appendList(root,detail) {
    /*for (var i = 0; i < detail.length; i++) {
        root.insertAdjacentHTML("beforeend",detail);
    }*/
	root.insertAdjacentHTML("beforeend",detail);
	}
	
	
	/*var devMore = document.getElementById("devMore");*/
	
	/*devMore.style.height = 370 + ((devlog.length-33)/3)*30 + 'px';*/
    
	var devClick=0;
	var rankClick=0;
	var bodybg= document.querySelector(".bodybg");
	var devMore= document.querySelector(".first");
	var devBox= document.querySelector(".devlog-box");
	var devlogMore= document.querySelector("#devMore");
	var rankMore0= document.querySelector("#rankMore");
	var descpMore= document.querySelector("#descpMore");
	var rankMore1= document.querySelector(".rank-l1");
	var rankMore2= document.querySelector(".rank-l2");
	var rankMore3= document.querySelector(".rank-l3");
	var secon= document.querySelector("#secon");
	var rankMain= document.querySelector("#ranking");
	var rankMain1= document.querySelector(".ranking");
	
	devlogMore.onclick=function devMoreM() {
		if(devClick==0) {
			devMore.style.height = 370 + ((devlog.length-33)/3)*29 + 'px';
			devBox.style.height = 350 + ((devlog.length-33)/3)*29 + 'px';
			devClick=1;
		}
		else {
			devMore.style.height = 370 + 'px';
			devBox.style.height = 350 + 'px';
			devClick=0;
		}
	}
	descpMore.onclick=function descpMoreM() {
		alert("官方Q群：\n543839696 (一群)\n274466453 (二群)\n欢迎入群交流！");
		}
	rankMore.onclick=function rankMoreM() {
		if(rankClick==0) {
			bodybg.style.height = bodybg.offsetHeight + ((Math.max(EGLRank.length,WGRank.length)/2-5)>0?(Math.max(EGLRank.length,WGRank.length)/2-5):0)*23 + 'px';
			secon.style.height = secon.offsetHeight + ((Math.max(EGLRank.length,WGRank.length)/2-5)>0?(Math.max(EGLRank.length,WGRank.length)/2-5):0)*23 + 'px';
			rankMain.style.height = rankMain.offsetHeight + ((Math.max(EGLRank.length,WGRank.length)/2-5)>0?(Math.max(EGLRank.length,WGRank.length)/2-5):0)*23 + 'px';
			rankMore1.style.height = rankMore1.offsetHeight + ((Math.max(EGLRank.length,WGRank.length)/2-5)>0?(Math.max(EGLRank.length,WGRank.length)/2-5):0)*23 + 'px';
			rankClick=1;
		}
		else if(rankClick==1) {
			bodybg.style.height = bodybg.offsetHeight + ((Math.max(SVTRank.length,EGRank.length)/2-5)>0?(Math.max(SVTRank.length,EGRank.length)/2-5):0)*23 + 'px';
			secon.style.height = secon.offsetHeight + ((Math.max(SVTRank.length,EGRank.length)/2-5)>0?(Math.max(SVTRank.length,EGRank.length)/2-5):0)*23 + 'px';
			rankMain.style.height = rankMain.offsetHeight + ((Math.max(SVTRank.length,EGRank.length)/2-5)>0?(Math.max(SVTRank.length,EGRank.length)/2-5):0)*23 + 'px';
			rankMore2.style.height = rankMore2.offsetHeight + ((Math.max(SVTRank.length,EGRank.length)/2-5)>0?(Math.max(SVTRank.length,EGRank.length)/2-5):0)*23 + 'px';
			rankClick=2;
		}
		else if(rankClick==2) {
			bodybg.style.height = bodybg.offsetHeight + ((Math.max(USARank.length,TOTRank.length)/2-5)>0?(Math.max(USARank.length,TOTRank.length)/2-5):0)*23 + 'px';
			secon.style.height = secon.offsetHeight + ((Math.max(USARank.length,TOTRank.length)/2-5)>0?(Math.max(USARank.length,TOTRank.length)/2-5):0)*23 + 'px';
			rankMain.style.height = rankMain.offsetHeight + ((Math.max(USARank.length,TOTRank.length)/2-5)>0?(Math.max(USARank.length,TOTRank.length)/2-5):0)*23 + 'px';
			rankMore3.style.height = rankMore3.offsetHeight + ((Math.max(USARank.length,TOTRank.length)/2-5)>0?(Math.max(USARank.length,TOTRank.length)/2-5):0)*23 + 'px';
			rankClick=3;
		}
		else if(rankClick>=3) {
			bodybg.style.height = bodybg.offsetHeight - ((Math.max(EGLRank.length,WGRank.length)/2-5)>0?(Math.max(EGLRank.length,WGRank.length)/2-5):0)*23 + 'px';
			secon.style.height = secon.offsetHeight - ((Math.max(EGLRank.length,WGRank.length)/2-5)>0?(Math.max(EGLRank.length,WGRank.length)/2-5):0)*23 + 'px';
			rankMain.style.height = rankMain.offsetHeight - ((Math.max(EGLRank.length,WGRank.length)/2-5)>0?(Math.max(EGLRank.length,WGRank.length)/2-5):0)*23 + 'px';
			rankMore1.style.height = rankMore1.offsetHeight - ((Math.max(EGLRank.length,WGRank.length)/2-5)>0?(Math.max(EGLRank.length,WGRank.length)/2-5):0)*23 + 'px';
			
			bodybg.style.height = bodybg.offsetHeight - ((Math.max(SVTRank.length,EGRank.length)/2-5)>0?(Math.max(SVTRank.length,EGRank.length)/2-5):0)*23 + 'px';
			secon.style.height = secon.offsetHeight - ((Math.max(SVTRank.length,EGRank.length)/2-5)>0?(Math.max(SVTRank.length,EGRank.length)/2-5):0)*23 + 'px';
			rankMain.style.height = rankMain.offsetHeight - ((Math.max(SVTRank.length,EGRank.length)/2-5)>0?(Math.max(SVTRank.length,EGRank.length)/2-5):0)*23 + 'px';
			rankMore2.style.height = rankMore2.offsetHeight - ((Math.max(SVTRank.length,EGRank.length)/2-5)>0?(Math.max(SVTRank.length,EGRank.length)/2-5):0)*23 + 'px';
			
			bodybg.style.height = bodybg.offsetHeight - ((Math.max(USARank.length,TOTRank.length)/2-5)>0?(Math.max(USARank.length,TOTRank.length)/2-5):0)*23 + 'px';
			secon.style.height = secon.offsetHeight - ((Math.max(USARank.length,TOTRank.length)/2-5)>0?(Math.max(USARank.length,TOTRank.length)/2-5):0)*23 + 'px';
			rankMain.style.height = rankMain.offsetHeight - ((Math.max(USARank.length,TOTRank.length)/2-5)>0?(Math.max(USARank.length,TOTRank.length)/2-5):0)*23 + 'px';
			rankMore3.style.height = rankMore3.offsetHeight - ((Math.max(USARank.length,TOTRank.length)/2-5)>0?(Math.max(USARank.length,TOTRank.length)/2-5):0)*23 + 'px';
			
			rankClick=0;
		}
	}

	
	
	//创建雪花元素
function snow() {
    //获取视窗的宽高
    var width = window.innerWidth;
    var height = window.innerHeight;

    var snow = document.createElement("div");             //创建元素
    
    //初始化雪花样式
    size = Math.random()*15 + 5;                          //随机生成雪花大小
    snow.style.width = size + "px";
    snow.style.height = size + "px";
   // snow.style.background = "url(img/雪花-0" + Math.floor((Math.random()*6)+1) + ".png) no-repeat";     //随机选择雪花的图片
    snow.style.background = "url(./res/snow.png) no-repeat";
    snow.style.backgroundSize = '100% 100%';
   //snow.innerHtml="*";
    snow.style.position = "fixed";                        //元素的位置相对于浏览器窗口是固定位置，即使窗口是滚动的它也不会移动
    snow.style.filter = "blur(1px)";                      //给图片设置高斯模糊
    snow.style.left = Math.random()*width + 'px';         //随机生成雪花的初始位置
    snow.style.top = "10px";
    snow.style.opacity = parseInt(Math.random()*10)/10;   //随机生成雪花的透明度

    //向body添加元素
    document.body.appendChild(snow);

    //创建定时器，每30ms雪花下落一次
    var timer = setInterval(function() {
        snow.style.top = parseInt(snow.style.top) + 8 + 'px';     //每次下落8px
        
        //当雪花到达底部后清除元素
        if(parseInt(snow.style.top) >= height) {
            clearInterval(timer);
            snow.parentNode.removeChild(snow)
        }
    },30)
}

//页面加载完成执行函数
function play() {
    //创建定时器，每50ms生成一朵雪花
    setInterval(function() {
        snow()
    },50)
}

play();

	
};


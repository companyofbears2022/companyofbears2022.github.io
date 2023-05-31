

window.onload = function () {
var devlog=["更多的音效","2023-5-29","../devlog/2023529.html","东德即将加入战斗！","2023-5-20","../devlog/2023520.html","克伦威尔与半人马","2023-5-10","../devlog/2023520.html","胜利日","2023-5-9","../devlog/2023520.html","重装出击！","2023-5-7","../devlog/2023520.html","平衡调整","2023-5-2","../devlog/2023520.html","下一个目标：莫斯科！","2023-4-24","../devlog/2023520.html","平衡调整","2023-4-13","../devlog/2023520.html","内测0.06版本发布","2023-3-19","../devlog/2023520.html","编不下去了x_x","2023-2-20","../devlog/2023520.html","啊啊啊啊啊啊啊","2023-2-10","../devlog/2023520.html","测试展开111","2023-1-27","../devlog/2023520.html","展开测试","2023-1-26","../devlog/2023520.html","展开测试","2023-1-20","../devlog/2023520.html","展开测试","2023-1-20","../devlog/2023520.html","展开测试","2023-1-20","../devlog/2023520.html","展开测试","2023-1-20","../devlog/2023520.html","展开测试","2023-1-20","../devlog/2023520.html","展开测试","2023-1-20","../devlog/2023520.html","展开测试","2023-1-20","../devlog/2023520.html","展开测试","2023-1-20","../devlog/2023520.html"];


var template1 ='';
var root = document.querySelector(".devlog");
for(var i=0;i<devlog.length;i=i+3) {
	template1 += `<div class="devlog-line"><p>■</p><a href="${devlog[i+2]}">${devlog[i]}</a><div class="time">${devlog[i+1]}</div></div>`;
	}
	appendList(root,template1);

function appendList(root,detail) {
    /*for (var i = 0; i < detail.length; i++) {
        root.insertAdjacentHTML("beforeend",detail);
    }*/
	root.insertAdjacentHTML("beforeend",detail);
	}
	
	
	/*var devMore = document.getElementById("devMore");*/
	
	/*devMore.style.height = 370 + ((devlog.length-33)/3)*30 + 'px';*/
    
	var devClick=0;
	var devMore= document.querySelector(".first");
	var devBox= document.querySelector(".devlog-box");
	var devlogMore= document.querySelector("#devMore");
	
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
};


window.onload=function(){
	/*let banlist=document.getElementsByClassName('banlist')[0];
	let banbox=document.getElementsByClassName('banner-pic')[0];
	let widths=banlist.offsetWidth;
	let ban=banbox.getElementsByTagName('li');
	let list=document.getElementsByClassName('bth-list')[0];
	let lists=list.getElementsByTagName('li');
	let forward=document.getElementsByClassName('banner-left')[0];
	let back=document.getElementsByClassName('banner-right')[0];
	// console.log(lists.length,ban.length,forward,back);
	let t;
	let flag=true;
	let now=next=0;*/
	//t=setInterval(fn,3000);
        let banbox=document.querySelector('.banlist');
        let widths=parseInt(getComputedStyle(banbox,null).width);
        let bans=document.querySelectorAll('.banner-pic>li');
        console.log(bans.length);
        let left=document.querySelector('.banner-left');
        let right=document.querySelector('.banner-right');
        let list=document.querySelectorAll('.bth-list>li');
    console.dir(bans,left,right,list);
        let t;
        let flag=true;
        let now=0;
        let next=0;
        t=setInterval(move,2000);
        function move(){
            next=now+1;
            if(next==bans.length){
                next=0;
            }
            bans[next].style.left=widths+'px';
            animate(bans[now],{left:-widths},function(){
                flag=true;
            });
            animate(bans[next],{left:0});
            list[now].classList.remove('bth');
            list[next].classList.add('bth');
            now=next;
        }
        banbox.onmouseenter=function(){
            clearInterval(t);
        }
        banbox.onmouseleave=function(){
            t=setInterval(move,2000);
        }
        right.onclick=function(){
            if(!flag){
                return;
            }
            flag=false;
            move();
        }
        left.onclick=function(){
            if(!flag){
                return;
            }
            flag=false;
            next=now-1;
            if(next==0){
                next=bans.length-1;
            }
            bans[next].style.left=-widths+'px';
            animate(bans[now],{left:widths},function(){
                flag=true;
            });
            animate(bans[next],{left:0});
            list[now].classList.remove('bth');
            list[next].classList.add('bth');
            now=next;
        }
        list.forEach(function(val,index){
            val.onclick=function(){
                flag=false;
                if(index>now){
                    bans[index].style.left=widths+'px';
                    animate(bans[now],{left:-widths},function(){
                        flag=true;
                    });
                    animate(bans[index],{left:0});
                    list[now].classList.remove('bth');
                    list[index].classList.add('bth');
                    now=index;
                }else if(index<now){
                    bans[index].style.left=-widths+'px';
                    animate(bans[now],{left:widths},function(){
                        flag=true;
                    });
                    animate(bans[index],{left:0});
                    list[now].classList.remove('bth');
                    list[index].classList.add('bth');
                    now=index;
                }else if(index==now){
                    flag=false;
                }
            }

        })

	// 导航
	let header=document.getElementsByClassName('header-main-right')[0];
	let ewbox=header.getElementsByTagName('li')[3];
	// console.log(ewbox);
	let ewm=document.getElementsByClassName('erweima')[0];
	ewbox.onmouseover=function(){
		ewbox.style.background='#fff';
		ewm.style.display='block';
	}
	ewbox.onmouseout=function(){
		ewbox.style.background='#F2F2F2';
		ewm.style.display='none';
	}


	// 节点轮播
	let jieyh=document.getElementsByClassName('yhcx-box')[0];
	let jiebox=document.getElementsByClassName('yhcx-main')[0];
	let jie=document.getElementsByClassName('yhcx-main-son');
	let sons=jiebox.childElementCount;
	console.log(sons);
	let sonw=jiebox.children[0].offsetWidth+parseInt(getComputedStyle(jiebox.children[0],null).marginRight);
	console.log(sonw);
	jiebox.style.width=`${sons*sonw}px`;
	console.log(jiebox.style.width);
	let btnL=document.getElementsByClassName('yhcx-left')[0];
	let btnR=document.getElementsByClassName('yhcx-right')[0];
	let jienum=0;
	let jiet;
	// let flag=true;
	jiet=setInterval(jiefn,2000);
	btnR.onclick=jiefn;
	btnL.onclick=jiefn1;
	jieyh.onmouseover=function(){
		clearInterval(jiet);
	}
	jieyh.onmouseout=function(){
		jiet=setInterval(jiefn,2000);
	}
	function jiefn(){
		jienum++;
		if(jienum==2){
			jienum=0;
		}
		jiebox.style.transform=`translateX(-${4*sonw*jienum}px)`;
	}
	function jiefn1(){
		jienum--;
		if(jienum==-1){
			jienum=1;
		}
		jiebox.style.transform=`translateX(-${4*sonw*jienum}px)`;
	}


	// navxxk
	let kuang=document.querySelectorAll('.banner-right1');
  	let chu=document.querySelectorAll('.banner-rightson');
  	console.log(kuang.length);
    kuang.forEach(function (val,index) {
        val.onmouseover=function () {
            chu[index].style.display="block";
        }
        val.onmouseout=function () {
            chu[index].style.display="none";
        }
    })
/*
    let nav=document.getElementsByClassName(".banner")[0];
    // console.log(nav);
    let list=document.querySelectorAll(".banner-right1");
    console.log(list);
    let mai=document.getElementsByClassName(".banner-rightson");
    console.log(mai);
    list.forEach(function (val,index) {
        val.onmouseover=function () {
            mai[index].style.display="block";
        }
        val.onmouseout=function () {
            mai[index].style.display="none";
        }
    })*/


    // 公告
  	let ggbox=document.getElementsByClassName('gg-main')[0];
  	let gg=ggbox.getElementsByTagName('li');
  	console.log(gg.length);
  	let ggleft=document.getElementsByClassName('gg-jian-left');
  	let ggL=ggleft[0];
  	let ggR=ggleft[1];
  	let ggt;
  	let num=0;
  	ggL.onclick=ggfn;
  	ggR.onclick=ggfn1;
  	ggt=setInterval(ggfn,2000);
  	function ggfn(){
  		num+=2;
  		// console.log(num);
  		if(num==4){
  			num=0;
  		}
  		for(let i=0;i<gg.length;i++){
  			gg[i].className='';
  		}
  		gg[num].className='ggli';
  		gg[num+1].className='ggli';
  	}
  	function ggfn1(){
  		num-=2;
  		if(num==-2){
  			num=2;
  		}
  		for(let i=0;i<gg.length;i++){
  			gg[i].className='';
  		}
  		gg[num].className='ggli';
  		gg[num+1].className='ggli';
  	}
}
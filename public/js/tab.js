function getId(id){
	 return typeof id ==='string'?document.getElementById(id):id;
  //    this.elements.push(document.getElementById(id));
	 // return this;
}
window.onload=function(){
    var titles=[];
    var divs = [];
    var oContent=getId('content');
	   titles=getId('title').getElementsByTagName('li');
	   divs= getByClass(oContent,'mod');
	   if(titles.length!=divs.length)
	   	return;
	   //遍历所有title
	for (var i=0;i<titles.length;i++){
		titles[i].id=i;  //添加id

		titles[i].onmouseover=function(){
			// alert(this.id)
			//清除所有li上的class
			for (var j = 0; j < titles.length; j++) {
				titles[j].className='';
				divs[j].style.display='none';
			};
			// 设置当前高亮显示
             this.className='active';
             divs[this.id].style.display='block';
		}
	}
} 

 function getByClass(parent,clsName){
  	var boxArr=[];
  	oElements = parent.getElementsByTagName('*');
    for (var i = 0; i <oElements.length ; i++) {
    	if (oElements[i].className==clsName){
    		boxArr.push(oElements[i]);
    	}
    };
    return boxArr
  }



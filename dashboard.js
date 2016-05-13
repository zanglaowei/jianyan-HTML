/***
Author：臧义伟
date：2016-3-3
Description：1，表格中的一行，点击任何部分都有事件产生
***/
// 首页的js 文件
$(document).ready(function(){
  $("tr").click(function(){
  	 window.location.href = '#'; 
  }
  );
  $("tr").mouseenter(
  	function(){
  		$(this).css({cursor:hand})
  	}
  );
  //日期控件
  $('#datetimepicker').datetimepicker({
    format: 'yyyy-mm-dd',
    autoclose: true,
    todayBtn: true,
    minView: 2,
  });
});

function selectChange(){
    window.location.href = '#';
}



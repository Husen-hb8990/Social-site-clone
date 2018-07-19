 window.onbeforeunload = function() {
          return "Are you sure to close?";
      }
function myInputCheck(){
	var x= document.getElementById("search").value;
	if(x==""){
	document.getElementById("alert").innerHTML = "Please Enter Key words...!";
	return;
	}else{
	document.getElementById("alert").innerHTML="";
	}
	}
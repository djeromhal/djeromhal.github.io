function startTime(){
	 var tm = new Date();
	 var dm = new Date();

	 var h = tm.getHours();
	 var m = tm.getMinutes();
	 var d = dm.getDate();
	 var mn = dm.getMonth();
	 if (h<=9) h="0"+h;
	 if (m<=9) m="0"+m;

	 var mnth;
	 switch(mn){
	 	case 0:
	 		mnth = "января";
	 		break;
	 	case 1:
	 		mnth = "февраля";
	 		break;
	 	case 2:
	 		mnth = "марта";
	 		break;
	 	case 3:
	 		mnth = "апреля";
	 		break;
	 	case 4:
	 		mnth = "мая";
	 		break;
	 	case 5:
	 		mnth = "июня";
	 		break;
	 	case 6:
	 		mnth = "июля";
	 		break;
	 	case 7:
	 		mnth = "августа";
	 		break;
	 	case 8:
	 		mnth = "сентября";
	 		break;
	 	case 9:
	 		mnth = "октября";
	 		break;
	 	case 10:
	 		mnth = "ноября";
	 		break;
	 	case 11:
	 		mnth = "декабря";
	 		break;
	 }
	 dm=d+" "+mnth;
	 tm=h+":"+m;
	 document.getElementById('dayMonth').innerHTML=dm;
	 document.getElementById('srvtime').innerHTML=tm;
	 setTimeout("startTime()", 1000);
 }
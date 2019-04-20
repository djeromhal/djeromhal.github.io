<?php
function geodata(){
	$client=@$_SERVER['HTTP_CLIENT_IP'];
	$forward=@$_SERVER['HTTP_X_FORWARDED_FOR'];
	$remote=@$_SERVER['REMOTE_ADDR'];
	$result=array('country'=>'','city'=>'');
	if(filter_var($client, FILTER_VALIDATE_IP))$ip=$client;
		elseif(filter_var($forward, FILTER_VALIDATE_IP))$ip=$forward;
		else $ip=$remote;
	return @json_decode(file_get_contents("http://www.geoplugin.net/json.gp?ip=".$ip));
}
function geogetidregion(){
	global $modx;
	$ip_data=geodata();
	//тут расчет исходя из данных $ip_data получаем нужный регион
	return 21;//выводим Москву
}

if($metod=='eshofull')var_export(geodata());

if($metod=='eshocountry'){
	$ip_data=geodata();
	if($ip_data && $ip_data->geoplugin_countryName != null)
		echo $ip_data->geoplugin_countryCode;
}
if($metod=='eshocountry'){
	$ip_data=geodata();
	if($ip_data && $ip_data->geoplugin_countryName != null)
		echo $ip_data->geoplugin_countryCode;
}

if($metod=='eshocity'){
	$ip_data=geodata();
	echo $ip_data->geoplugin_city;
}

if($metod=='get_region_id'){//вернет номер региона
	echo geogetidregion();
}

if($metod=='region'){
	if(!$id)$id=geogetidregion();
	global $modx;
	if($echo_metod=='inline')return $tpl;
		else return $modx->getChunk($tpl,array('id'=>$id));
}

if($metod=='showonlyformoscow'){
	global $modx;
	$ip_data=geodata();
	if($ip_data->geoplugin_city=='Moscow')$data=$then;
		else $data=$else;
	if($echo_metod=='inline')return $data;
		else return $modx->getChunk($data);
}
if($metod=='showonlyforpiter'){
	global $modx;
	$ip_data=geodata();
	if($ip_data->geoplugin_region=='Leningradskaya Oblast\'')$data=$then;
		else $data=$else;
	if($echo_metod=='inline')return $data;
		else return $modx->getChunk($data);
}
return;

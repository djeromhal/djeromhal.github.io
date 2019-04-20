<?php
$resource=$modx->resource;
$data=json_decode($resource->getTVValue('slider1'),true);
foreach($data as $n=>$v){
	if($v['active']==1){
		if($v['type']==1)echo $modx->getChunk('slider1_li_type1',$v);
		if($v['type']==2)echo $modx->getChunk('slider1_li_type2',$v);
		if($v['type']==3)echo $modx->getChunk('slider1_li_type3',$v);
	}
}
return;

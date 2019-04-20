<?php
global $modx;
$param=array(
	'id'=>$id,
	'rb_background'=>$rb_background,
	'rb_type_block'=>$rb_type_block,
	'rb_h2'=>$rb_h2,
	'rb_image'=>$rb_image,
	'rb_number'=>$rb_number,
	'rb_line'=>$rb_line,
	'rb_load'=>$rb_load,
	'rb_list'=>$rb_list,
	'content'=>$content,
);
if((int)$rb_type_block<7)echo $modx->getChunk('rabotaem_li_type1',$param);
if((int)$rb_type_block==7)echo $modx->getChunk('rabotaem_li_type2',$param);
if((int)$rb_type_block==9)echo $modx->getChunk('rabotaem_li_type3',$param);
return;

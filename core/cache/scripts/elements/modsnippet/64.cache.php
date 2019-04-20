<?php  return 'if(isset($id))$resource=$modx->getObject(\'modResource\', $id=$resource->get(\'id\'));
	else $resource=$modx->resource;
$w_3d_model=$resource->getTVValue(\'w_3d_model\');
if($w_3d_model!=\'\'){
	if(!isset($width))$width=\'100%\';
	if(!isset($height))$height=547;
	echo \'<li class="model"><iframe name="model" id="model" allowfullscreen webkitallowfullscreen width="\'.$width.\'" height="\'.$height.\'" frameborder="0" seamless src="https://p3d.in/e/\'.$w_3d_model.\'"></iframe></li>\';
	//echo \'<li class="model"><iframe name="model" id="model" allowfullscreen webkitallowfullscreen width="\'.$width.\'" height="\'.$height.\'" frameborder="0" seamless src="/loadmodel/?id=\'.$w_3d_model.\'"></iframe></li>\';
}
return;
';
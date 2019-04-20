<?php  return '$resource=$modx->resource;
$list=$resource->getTVValue(\'our_production_list\');
if(trim($list)!=\'\'){
	$caption=$resource->getTVValue(\'our_production_caption\');
	echo \'<div class="vpl-section our_production"><div class="container"><div class="caption">\'.$caption.\'</div>\';
	$param=array(
		\'parents\'=>27,
		\'outerClass\'=>0,
		\'resources\'=>0,
		\'tpl\'=>\'our_production\',
		\'limit\'=>12,
		\'includeTVs\'=>\'w_count_people,w_udal_vodi,w_glubina_trubi,w_price,w_old_price\',
		\'sortby\'=>\'menuindex\',
		\'sortdir\'=>\'ASC\',
		\'where\'=>\'{"template:=":12}\',
		\'resources\'=>$list
	);
	echo $modx->runSnippet(\'pdoResources\',$param);
	echo \'</div></div>\';
}
return;
';
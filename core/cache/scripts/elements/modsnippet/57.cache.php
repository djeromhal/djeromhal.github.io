<?php  return 'global $modx;
$total=$modx->getPlaceholder(\'total_image_\'.$id);
if($total==1){
	$result=$modx->runSnippet(\'getImageList\' ,array(
		\'tvname\'=>\'rb_image\',
		\'docid\'=>$id,
		\'where\'=>\'{"active":"1"}\',
		\'tpl\'=>\'@CODE: <div class="vpl-bounce-in-left-container"><img class="vpl-bounce-in-left js-viewport-checker invisible" data-vp-add-class="animated bounceInLeft" data-vp-remove-class="invisible" src="[[+image]]"></div>\'
	));
	echo $result;
}
if($total>1){
	$result=$modx->runSnippet(\'getImageList\' ,array(
		\'tvname\'=>\'rb_image\',
		\'docid\'=>$id,
		\'where\'=>\'{"active":"1"}\',
		\'tpl\'=>\'@CODE: <img class="img-responsive center-block" src="[[+image]]" alt="[[+name]]" />\'
	));
	echo \'<div class="col-xs-12">\'.$result.\'</div>\';
}
return;
';
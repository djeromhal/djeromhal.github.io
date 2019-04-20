<?php  return '$output=\'\';
if($metod==\'get\')$output=$_GET[$field];
if($metod==\'post\')$output=$_POST[$field];
return (string) $output;
return;
';
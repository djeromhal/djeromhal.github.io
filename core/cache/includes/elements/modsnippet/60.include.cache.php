<?php
$result='';
for($i=0; $i<strlen($input); $i++)
	if(in_array($input[$i],array('0','1','2','3','4','5','6','7','8','9','+')))
		$result.=$input[$i];
return $result;
return;

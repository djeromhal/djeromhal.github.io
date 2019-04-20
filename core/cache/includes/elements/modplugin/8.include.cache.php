<?php
if ($modx->event->name == OnDocFormRender and $_REQUEST['a'] == 'resource/create') {
  
  $parentId = (int) $_REQUEST['parent'];
    
  if ( $parentObj = $modx->getObject('modResource', $parentId) or $parentObj = $modx->getObject('msProduct', $parentId)) {
      
    $parentTemplate = $parentObj->get('template');
      
    switch($parentTemplate) {
    
    //  case '3':
    //      $childTemplate = 4;
    //      break;

    
    //  case '5':
    //      $childTemplate = 2;
    //      break;
    
    //  case '8':
    //  $childTemplate = 7;
    //   break;
    
      default:
       $childTemplate = 1;
    }
    
    $modx->controller->setProperty('template', $childTemplate);
  }
}
return;

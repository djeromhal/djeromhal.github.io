<?php
/* Smarty version 3.1.31, created on 2019-03-01 10:22:41
  from "/home/v/v5008038/kristall-septik.rf/public_html/manager/templates/default/resource/staticresource/create.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5c78ddc126c3c7_03838448',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'b67c1de231d0ceacf64e5153779c950150c587d1' => 
    array (
      0 => '/home/v/v5008038/kristall-septik.rf/public_html/manager/templates/default/resource/staticresource/create.tpl',
      1 => 1550263221,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5c78ddc126c3c7_03838448 (Smarty_Internal_Template $_smarty_tpl) {
?>
<div id="modx-panel-static-div"></div>
<div id="modx-resource-tvs-div" class="modx-resource-tab x-form-label-left x-panel"><?php echo (($tmp = @$_smarty_tpl->tpl_vars['tvOutput']->value)===null||$tmp==='' ? '' : $tmp);?>
</div>

<?php echo $_smarty_tpl->tpl_vars['onDocFormPrerender']->value;?>

<?php if ($_smarty_tpl->tpl_vars['resource']->value->richtext && $_smarty_tpl->tpl_vars['_config']->value['use_editor']) {?>
    <?php echo $_smarty_tpl->tpl_vars['onRichTextEditorInit']->value;?>

<?php }
}
}
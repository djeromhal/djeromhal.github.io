<?php
/* Smarty version 3.1.31, created on 2019-02-28 01:01:23
  from "/home/v/v5008038/kristall-septik.rf/public_html/manager/templates/default/element/tv/renders/input/number.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5c7708b39a0069_09768203',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '6069bb4d5e1df81c329fe0891926f58ffc88efc6' => 
    array (
      0 => '/home/v/v5008038/kristall-septik.rf/public_html/manager/templates/default/element/tv/renders/input/number.tpl',
      1 => 1550263220,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5c7708b39a0069_09768203 (Smarty_Internal_Template $_smarty_tpl) {
?>
<input id="tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
" name="tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
"
	type="text" class="textfield"
	value="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['tv']->value->get('value'), ENT_QUOTES, 'UTF-8', true);?>
"
	<?php echo $_smarty_tpl->tpl_vars['style']->value;?>

	tvtype="<?php echo $_smarty_tpl->tpl_vars['tv']->value->type;?>
"
/>

<?php echo '<script'; ?>
 type="text/javascript">
// <![CDATA[

Ext.onReady(function() {
    var fld = MODx.load({
    
        xtype: 'numberfield'
        ,applyTo: 'tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
'
        ,width: 400
        ,enableKeyEvents: true
        ,autoStripChars: true
        ,allowBlank: <?php if ($_smarty_tpl->tpl_vars['params']->value['allowBlank'] == 1 || $_smarty_tpl->tpl_vars['params']->value['allowBlank'] == 'true') {?>true<?php } else { ?>false<?php }?> 
        ,allowDecimals: <?php if ($_smarty_tpl->tpl_vars['params']->value['allowDecimals'] && $_smarty_tpl->tpl_vars['params']->value['allowDecimals'] != 'false' && $_smarty_tpl->tpl_vars['params']->value['allowDecimals'] != 'No') {?>true<?php } else { ?>false<?php }?> 
        ,allowNegative: <?php if ($_smarty_tpl->tpl_vars['params']->value['allowNegative'] && $_smarty_tpl->tpl_vars['params']->value['allowNegative'] != 'false' && $_smarty_tpl->tpl_vars['params']->value['allowNegative'] != 'No') {?>true<?php } else { ?>false<?php }?> 
        ,decimalPrecision: <?php if ($_smarty_tpl->tpl_vars['params']->value['decimalPrecision'] >= 0) {
echo sprintf("%d",$_smarty_tpl->tpl_vars['params']->value['decimalPrecision']);
} else { ?>2<?php }?> 
        ,decimalSeparator: <?php if ($_smarty_tpl->tpl_vars['params']->value['decimalSeparator']) {?>'<?php echo $_smarty_tpl->tpl_vars['params']->value['decimalSeparator'];?>
'<?php } else { ?>'.'<?php }?> 
        <?php if ($_smarty_tpl->tpl_vars['params']->value['maxValue'] != '' && is_numeric($_smarty_tpl->tpl_vars['params']->value['maxValue'])) {?>,maxValue: <?php echo $_smarty_tpl->tpl_vars['params']->value['maxValue'];
}?> 
        <?php if ($_smarty_tpl->tpl_vars['params']->value['minValue'] != '' && is_numeric($_smarty_tpl->tpl_vars['params']->value['minValue'])) {?>,minValue: <?php echo $_smarty_tpl->tpl_vars['params']->value['minValue'];
}?> 
        ,msgTarget: 'under'
    
        ,listeners: { 'keydown': { fn:MODx.fireResourceFormChange, scope:this}}
    });
    MODx.makeDroppable(fld);
    Ext.getCmp('modx-panel-resource').getForm().add(fld);
});

// ]]>
<?php echo '</script'; ?>
>
<?php }
}

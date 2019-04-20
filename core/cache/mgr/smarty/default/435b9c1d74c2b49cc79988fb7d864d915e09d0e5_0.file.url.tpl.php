<?php
/* Smarty version 3.1.31, created on 2019-03-01 10:19:26
  from "/home/v/v5008038/kristall-septik.rf/public_html/manager/templates/default/element/tv/renders/input/url.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_5c78dcfeef8d22_35980753',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '435b9c1d74c2b49cc79988fb7d864d915e09d0e5' => 
    array (
      0 => '/home/v/v5008038/kristall-septik.rf/public_html/manager/templates/default/element/tv/renders/input/url.tpl',
      1 => 1550263220,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5c78dcfeef8d22_35980753 (Smarty_Internal_Template $_smarty_tpl) {
?>
<select id="tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
_prefix" name="tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
_prefix" onchange="MODx.fireResourceFormChange();">
<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['urls']->value, 'url');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['url']->value) {
?>
	<option value="<?php echo $_smarty_tpl->tpl_vars['url']->value;?>
" <?php if ($_smarty_tpl->tpl_vars['url']->value == (($tmp = @$_smarty_tpl->tpl_vars['selected']->value)===null||$tmp==='' ? '' : $tmp)) {?>selected="selected"<?php }?>><?php echo $_smarty_tpl->tpl_vars['url']->value;?>
</option>
<?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>

</select>
<input id="tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
" name="tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
"
	type="text"
	value="<?php echo $_smarty_tpl->tpl_vars['tv']->value->get('processedValue');?>
"
	onchange="MODx.fireResourceFormChange();"
	class="textfield x-form-text x-form-field"
	style="width: 283px;"
/>
<?php echo '<script'; ?>
 type="text/javascript">
// <![CDATA[
Ext.onReady(function() {
	MODx.makeDroppable(Ext.get('tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
'));

    var fld = MODx.load({
        xtype: 'combo'
        ,transform: 'tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
_prefix'
        ,id: 'tv<?php echo $_smarty_tpl->tpl_vars['tv']->value->id;?>
_prefix'
        ,triggerAction: 'all'
        ,width: 100
        ,allowBlank: false
        ,maxHeight: 300
        ,typeAhead: false
        ,forceSelection: false
        ,msgTarget: 'under'
        ,listeners: { 'select': { fn:MODx.fireResourceFormChange, scope:this}}
    });

	fld.wrap.applyStyles({
		display: "inline-block"
	});
});
// ]]>
<?php echo '</script'; ?>
>
<?php }
}

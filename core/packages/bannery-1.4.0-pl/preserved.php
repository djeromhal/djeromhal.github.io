<?php return array (
  'a6fc5a46a4979983fc765a18c1b56e3f' => 
  array (
    'criteria' => 
    array (
      'name' => 'bannery',
    ),
    'object' => 
    array (
      'name' => 'bannery',
      'path' => '{core_path}components/bannery/',
      'assets_path' => '',
    ),
  ),
  'eeb2db78fe56ed7c9ff30e32ab1c767f' => 
  array (
    'criteria' => 
    array (
      'key' => 'bannery_click',
    ),
    'object' => 
    array (
      'key' => 'bannery_click',
      'value' => 'bannerclick',
      'xtype' => 'textfield',
      'namespace' => 'bannery',
      'area' => 'bannery_main',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  '35d8c2fff5c636e481c0dfe57bc88928' => 
  array (
    'criteria' => 
    array (
      'key' => 'bannery_media_source',
    ),
    'object' => 
    array (
      'key' => 'bannery_media_source',
      'value' => '',
      'xtype' => 'numberfield',
      'namespace' => 'bannery',
      'area' => 'bannery_main',
      'editedon' => '0000-00-00 00:00:00',
    ),
  ),
  '1c1d29445f701bfcbfd9cf1b58db4799' => 
  array (
    'criteria' => 
    array (
      'category' => 'BannerY',
    ),
    'object' => 
    array (
      'id' => 10,
      'parent' => 0,
      'category' => 'BannerY',
      'rank' => 0,
    ),
  ),
  'e90d8a180d7abf36d8f2f3cab6c1b5ac' => 
  array (
    'criteria' => 
    array (
      'name' => 'byAd',
    ),
    'object' => 
    array (
      'id' => 5,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'byAd',
      'description' => 'BannerY Ad',
      'editor_type' => 0,
      'category' => 10,
      'cache_type' => 0,
      'snippet' => '<p><a href="[[++bannery_click]]/[[+adposition]]"><img src="[[+image]]" alt="[[+name]]" title="[[+description]]"/></a></p>
<p>Banner with extra params (available as placeholders in banner URL):<br />
<a href="[[++bannery_click]]/[[+adposition]]?id=[[*id]]&amp;something=123"><img src="[[+image]]" alt="[[+name]]" /></a></p>
',
      'locked' => 0,
      'properties' => NULL,
      'static' => 0,
      'static_file' => 'core/components/bannery/elements/chunks/chunk.byad.tpl',
      'content' => '<p><a href="[[++bannery_click]]/[[+adposition]]"><img src="[[+image]]" alt="[[+name]]" title="[[+description]]"/></a></p>
<p>Banner with extra params (available as placeholders in banner URL):<br />
<a href="[[++bannery_click]]/[[+adposition]]?id=[[*id]]&amp;something=123"><img src="[[+image]]" alt="[[+name]]" /></a></p>
',
    ),
  ),
  'd7ac0c99dec1187673acffdb84de9934' => 
  array (
    'criteria' => 
    array (
      'name' => 'BannerY',
    ),
    'object' => 
    array (
      'id' => 42,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'BannerY',
      'description' => 'Show ads on your site',
      'editor_type' => 0,
      'category' => 10,
      'cache_type' => 0,
      'snippet' => '/** @var array $scriptProperties */
/* @var pdoFetch $pdoFetch */
if (!$modx->getService(\'pdoFetch\')) {return \'You need to install pdoTools to use this snippet!\';}
$pdoFetch = new pdoFetch($modx, $scriptProperties);
$pdoFetch->addTime(\'pdoTools loaded\');
$modx->lexicon->load(\'bannery:default\');
$modx->addPackage(\'bannery\', MODX_CORE_PATH . \'components/bannery/model/\');

if (!empty($tplOuter)) {$tplWrapper = $tplOuter;}
if (empty($outputSeparator)) {$outputSeparator = "\\n";}
$class = \'byAd\';

// Adding extra parameters into special place so we can put them in results
/** @var modSnippet $snippet */
$additionalPlaceholders = array();
if ($snippet = $modx->getObject(\'modSnippet\', array(\'name\' => \'BannerY\'))) {
	$properties = unserialize($snippet->properties);
	foreach ($scriptProperties as $k => $v) {
		if (!isset($properties[$k])) {
			$additionalPlaceholders[$k] = $v;
		}
	}
}
// ---

$date = date(\'Y-m-d H:i:s\');
$where = array(
	"({$class}.start IS NULL OR {$class}.start <= \'{$date}\') AND ({$class}.end IS NULL OR {$class}.end >= \'{$date}\')"
);
if (empty($showInactive)) {
	$where[$class.\'.active\'] = 1;
}
if (!empty($position)) {
	$where[\'byAdPosition.position\'] = $position;
}
elseif (!empty($positions)) {
	$where[\'byAdPosition.position:IN\'] = array_map(\'trim\', explode(\',\', $positions));
}

if (empty($sortby)) {
	$sortby = \'RAND()\';
}
elseif ($sortby == \'idx\' || $sortby == \'index\') {
	$sortby = \'byAdPosition.idx\';
}
else {
	$sortby = $class.\'.\'.$sortby;
}

$innerJoin = array(
	\'byAdPosition\' => array(
		\'alias\' => \'byAdPosition\',
		\'on\' => $class.\'.id = byAdPosition.ad\'
	)
);

// Fields to select
$select = array(
	$class => \'all\',
	\'byAdPosition\' => \'`byAdPosition`.`id` as `adposition`, `byAdPosition`.`ad`\'
);

// Add custom parameters
foreach (array(\'where\',\'innerJoin\',\'select\') as $v) {
	if (!empty($scriptProperties[$v])) {
		$tmp = $modx->fromJSON($scriptProperties[$v]);
		if (is_array($tmp)) {
			$$v = array_merge($$v, $tmp);
		}
	}
	unset($scriptProperties[$v]);
}
$pdoFetch->addTime(\'Conditions prepared\');

$default = array(
	\'class\' => $class,
	\'innerJoin\' => $modx->toJSON($innerJoin),
	\'where\' => $modx->toJSON($where),
	\'select\' => $modx->toJSON($select),
	\'sortby\' => $sortby,
	\'groupby\' => $class.\'.id\',
	\'return\' => \'data\',
	\'disableConditions\' => true,
);

$pdoFetch->setConfig(array_merge($default, $scriptProperties));
$rows = $pdoFetch->run();

$output = array();
$default_source = $modx->getOption(\'bannery_media_source\', null, $modx->getOption(\'default_media_source\'), true);
$sources = array();
foreach ($rows as $row) {
	$source = !empty($row[\'source\'])
		? $row[\'source\']
		: $default_source;

	if (!isset($sources[$row[\'source\']])) {
		/** @var modMediaSource $source */
		if ($source = $modx->getObject(\'sources.modMediaSource\', $source)) {
			$source->initialize($modx->context->key);
		}
		$sources[$row[\'source\']] = $source;
	}
	else {
		$source = $sources[$row[\'source\']];
	}

	if (!empty($source) && $source instanceof modMediaSource && !empty($row[\'image\'])) {
		$row[\'image\'] = $source->getObjectUrl($row[\'image\']);
	}

	$row[\'idx\'] = $pdoFetch->idx++;
	$tpl = $pdoFetch->defineChunk($row);
	if (!empty($additionalPlaceholders)) {
		$row = array_merge($additionalPlaceholders, $row);
	}

	$output[] = !empty($tpl)
		? $pdoFetch->getChunk($tpl, $row, $pdoFetch->config[\'fastMode\'])
		: \'<pre>\'.$pdoFetch->getChunk(\'\', $row).\'</pre>\';
}

if ($modx->user->hasSessionContext(\'mgr\') && !empty($showLog)) {
	$output[\'log\'] = \'<pre class="pdoUsersLog">\' . print_r($pdoFetch->getTime(), 1) . \'</pre>\';
}

// Return output
if (!empty($toSeparatePlaceholders)) {
	$modx->setPlaceholders($output, $toSeparatePlaceholders);
}
else {
	$output = implode($outputSeparator, $output);

	if (!empty($tplWrapper) && (!empty($wrapIfEmpty) || !empty($output))) {
		$output = $pdoFetch->getChunk($tplWrapper, array(\'output\' => $output), $pdoFetch->config[\'fastMode\']);
	}

	if (!empty($toPlaceholder)) {
		$modx->setPlaceholder($toPlaceholder, $output);
	}
	else {
		return $output;
	}
}',
      'locked' => 0,
      'properties' => 'a:18:{s:9:"positions";a:7:{s:4:"name";s:9:"positions";s:4:"desc";s:22:"bannery_prop_positions";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:0:"";s:7:"lexicon";s:18:"bannery:properties";s:4:"area";s:0:"";}s:7:"showLog";a:7:{s:4:"name";s:7:"showLog";s:4:"desc";s:20:"bannery_prop_showLog";s:4:"type";s:13:"combo-boolean";s:7:"options";a:0:{}s:5:"value";b:0;s:7:"lexicon";s:18:"bannery:properties";s:4:"area";s:0:"";}s:8:"fastMode";a:7:{s:4:"name";s:8:"fastMode";s:4:"desc";s:21:"bannery_prop_fastMode";s:4:"type";s:13:"combo-boolean";s:7:"options";a:0:{}s:5:"value";b:0;s:7:"lexicon";s:18:"bannery:properties";s:4:"area";s:0:"";}s:5:"limit";a:7:{s:4:"name";s:5:"limit";s:4:"desc";s:18:"bannery_prop_limit";s:4:"type";s:11:"numberfield";s:7:"options";a:0:{}s:5:"value";i:5;s:7:"lexicon";s:18:"bannery:properties";s:4:"area";s:0:"";}s:6:"offset";a:7:{s:4:"name";s:6:"offset";s:4:"desc";s:19:"bannery_prop_offset";s:4:"type";s:11:"numberfield";s:7:"options";a:0:{}s:5:"value";i:0;s:7:"lexicon";s:18:"bannery:properties";s:4:"area";s:0:"";}s:6:"sortby";a:7:{s:4:"name";s:6:"sortby";s:4:"desc";s:19:"bannery_prop_sortby";s:4:"type";s:4:"list";s:7:"options";a:7:{i:0;a:2:{s:4:"text";s:6:"Random";s:5:"value";s:6:"RAND()";}i:1;a:2:{s:4:"text";s:5:"Index";s:5:"value";s:3:"idx";}i:2;a:2:{s:4:"text";s:4:"Name";s:5:"value";s:4:"name";}i:3;a:2:{s:4:"text";s:3:"Url";s:5:"value";s:3:"url";}i:4;a:2:{s:4:"text";s:5:"Image";s:5:"value";s:5:"image";}i:5;a:2:{s:4:"text";s:6:"Active";s:5:"value";s:6:"active";}i:6;a:2:{s:4:"text";s:11:"Description";s:5:"value";s:11:"description";}}s:5:"value";s:6:"RAND()";s:7:"lexicon";s:18:"bannery:properties";s:4:"area";s:0:"";}s:7:"sortdir";a:7:{s:4:"name";s:7:"sortdir";s:4:"desc";s:20:"bannery_prop_sortdir";s:4:"type";s:4:"list";s:7:"options";a:2:{i:0;a:2:{s:4:"text";s:3:"ASC";s:5:"value";s:3:"ASC";}i:1;a:2:{s:4:"text";s:4:"DESC";s:5:"value";s:4:"DESC";}}s:5:"value";s:3:"ASC";s:7:"lexicon";s:18:"bannery:properties";s:4:"area";s:0:"";}s:15:"outputSeparator";a:7:{s:4:"name";s:15:"outputSeparator";s:4:"desc";s:28:"bannery_prop_outputSeparator";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:1:"
";s:7:"lexicon";s:18:"bannery:properties";s:4:"area";s:0:"";}s:5:"where";a:7:{s:4:"name";s:5:"where";s:4:"desc";s:18:"bannery_prop_where";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:0:"";s:7:"lexicon";s:18:"bannery:properties";s:4:"area";s:0:"";}s:12:"showInactive";a:7:{s:4:"name";s:12:"showInactive";s:4:"desc";s:25:"bannery_prop_showInactive";s:4:"type";s:13:"combo-boolean";s:7:"options";a:0:{}s:5:"value";b:0;s:7:"lexicon";s:18:"bannery:properties";s:4:"area";s:0:"";}s:3:"tpl";a:7:{s:4:"name";s:3:"tpl";s:4:"desc";s:16:"bannery_prop_tpl";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:4:"byAd";s:7:"lexicon";s:18:"bannery:properties";s:4:"area";s:0:"";}s:8:"tplFirst";a:7:{s:4:"name";s:8:"tplFirst";s:4:"desc";s:21:"bannery_prop_tplFirst";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:0:"";s:7:"lexicon";s:18:"bannery:properties";s:4:"area";s:0:"";}s:7:"tplLast";a:7:{s:4:"name";s:7:"tplLast";s:4:"desc";s:20:"bannery_prop_tplLast";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:0:"";s:7:"lexicon";s:18:"bannery:properties";s:4:"area";s:0:"";}s:6:"tplOdd";a:7:{s:4:"name";s:6:"tplOdd";s:4:"desc";s:19:"bannery_prop_tplOdd";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:0:"";s:7:"lexicon";s:18:"bannery:properties";s:4:"area";s:0:"";}s:10:"tplWrapper";a:7:{s:4:"name";s:10:"tplWrapper";s:4:"desc";s:23:"bannery_prop_tplWrapper";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:0:"";s:7:"lexicon";s:18:"bannery:properties";s:4:"area";s:0:"";}s:11:"wrapIfEmpty";a:7:{s:4:"name";s:11:"wrapIfEmpty";s:4:"desc";s:24:"bannery_prop_wrapIfEmpty";s:4:"type";s:13:"combo-boolean";s:7:"options";a:0:{}s:5:"value";b:0;s:7:"lexicon";s:18:"bannery:properties";s:4:"area";s:0:"";}s:13:"toPlaceholder";a:7:{s:4:"name";s:13:"toPlaceholder";s:4:"desc";s:26:"bannery_prop_toPlaceholder";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:0:"";s:7:"lexicon";s:18:"bannery:properties";s:4:"area";s:0:"";}s:22:"toSeparatePlaceholders";a:7:{s:4:"name";s:22:"toSeparatePlaceholders";s:4:"desc";s:35:"bannery_prop_toSeparatePlaceholders";s:4:"type";s:9:"textfield";s:7:"options";a:0:{}s:5:"value";s:0:"";s:7:"lexicon";s:18:"bannery:properties";s:4:"area";s:0:"";}}',
      'moduleguid' => '',
      'static' => 0,
      'static_file' => 'core/components/bannery/elements/snippets/snippet.bannery.php',
      'content' => '/** @var array $scriptProperties */
/* @var pdoFetch $pdoFetch */
if (!$modx->getService(\'pdoFetch\')) {return \'You need to install pdoTools to use this snippet!\';}
$pdoFetch = new pdoFetch($modx, $scriptProperties);
$pdoFetch->addTime(\'pdoTools loaded\');
$modx->lexicon->load(\'bannery:default\');
$modx->addPackage(\'bannery\', MODX_CORE_PATH . \'components/bannery/model/\');

if (!empty($tplOuter)) {$tplWrapper = $tplOuter;}
if (empty($outputSeparator)) {$outputSeparator = "\\n";}
$class = \'byAd\';

// Adding extra parameters into special place so we can put them in results
/** @var modSnippet $snippet */
$additionalPlaceholders = array();
if ($snippet = $modx->getObject(\'modSnippet\', array(\'name\' => \'BannerY\'))) {
	$properties = unserialize($snippet->properties);
	foreach ($scriptProperties as $k => $v) {
		if (!isset($properties[$k])) {
			$additionalPlaceholders[$k] = $v;
		}
	}
}
// ---

$date = date(\'Y-m-d H:i:s\');
$where = array(
	"({$class}.start IS NULL OR {$class}.start <= \'{$date}\') AND ({$class}.end IS NULL OR {$class}.end >= \'{$date}\')"
);
if (empty($showInactive)) {
	$where[$class.\'.active\'] = 1;
}
if (!empty($position)) {
	$where[\'byAdPosition.position\'] = $position;
}
elseif (!empty($positions)) {
	$where[\'byAdPosition.position:IN\'] = array_map(\'trim\', explode(\',\', $positions));
}

if (empty($sortby)) {
	$sortby = \'RAND()\';
}
elseif ($sortby == \'idx\' || $sortby == \'index\') {
	$sortby = \'byAdPosition.idx\';
}
else {
	$sortby = $class.\'.\'.$sortby;
}

$innerJoin = array(
	\'byAdPosition\' => array(
		\'alias\' => \'byAdPosition\',
		\'on\' => $class.\'.id = byAdPosition.ad\'
	)
);

// Fields to select
$select = array(
	$class => \'all\',
	\'byAdPosition\' => \'`byAdPosition`.`id` as `adposition`, `byAdPosition`.`ad`\'
);

// Add custom parameters
foreach (array(\'where\',\'innerJoin\',\'select\') as $v) {
	if (!empty($scriptProperties[$v])) {
		$tmp = $modx->fromJSON($scriptProperties[$v]);
		if (is_array($tmp)) {
			$$v = array_merge($$v, $tmp);
		}
	}
	unset($scriptProperties[$v]);
}
$pdoFetch->addTime(\'Conditions prepared\');

$default = array(
	\'class\' => $class,
	\'innerJoin\' => $modx->toJSON($innerJoin),
	\'where\' => $modx->toJSON($where),
	\'select\' => $modx->toJSON($select),
	\'sortby\' => $sortby,
	\'groupby\' => $class.\'.id\',
	\'return\' => \'data\',
	\'disableConditions\' => true,
);

$pdoFetch->setConfig(array_merge($default, $scriptProperties));
$rows = $pdoFetch->run();

$output = array();
$default_source = $modx->getOption(\'bannery_media_source\', null, $modx->getOption(\'default_media_source\'), true);
$sources = array();
foreach ($rows as $row) {
	$source = !empty($row[\'source\'])
		? $row[\'source\']
		: $default_source;

	if (!isset($sources[$row[\'source\']])) {
		/** @var modMediaSource $source */
		if ($source = $modx->getObject(\'sources.modMediaSource\', $source)) {
			$source->initialize($modx->context->key);
		}
		$sources[$row[\'source\']] = $source;
	}
	else {
		$source = $sources[$row[\'source\']];
	}

	if (!empty($source) && $source instanceof modMediaSource && !empty($row[\'image\'])) {
		$row[\'image\'] = $source->getObjectUrl($row[\'image\']);
	}

	$row[\'idx\'] = $pdoFetch->idx++;
	$tpl = $pdoFetch->defineChunk($row);
	if (!empty($additionalPlaceholders)) {
		$row = array_merge($additionalPlaceholders, $row);
	}

	$output[] = !empty($tpl)
		? $pdoFetch->getChunk($tpl, $row, $pdoFetch->config[\'fastMode\'])
		: \'<pre>\'.$pdoFetch->getChunk(\'\', $row).\'</pre>\';
}

if ($modx->user->hasSessionContext(\'mgr\') && !empty($showLog)) {
	$output[\'log\'] = \'<pre class="pdoUsersLog">\' . print_r($pdoFetch->getTime(), 1) . \'</pre>\';
}

// Return output
if (!empty($toSeparatePlaceholders)) {
	$modx->setPlaceholders($output, $toSeparatePlaceholders);
}
else {
	$output = implode($outputSeparator, $output);

	if (!empty($tplWrapper) && (!empty($wrapIfEmpty) || !empty($output))) {
		$output = $pdoFetch->getChunk($tplWrapper, array(\'output\' => $output), $pdoFetch->config[\'fastMode\']);
	}

	if (!empty($toPlaceholder)) {
		$modx->setPlaceholder($toPlaceholder, $output);
	}
	else {
		return $output;
	}
}',
    ),
  ),
  '11a62b39852e20ff4827a4db97994b04' => 
  array (
    'criteria' => 
    array (
      'name' => 'BannerYClickout',
    ),
    'object' => 
    array (
      'id' => 11,
      'source' => 1,
      'property_preprocess' => 0,
      'name' => 'BannerYClickout',
      'description' => 'Handle ad clicks',
      'editor_type' => 0,
      'category' => 10,
      'cache_type' => 0,
      'plugincode' => 'if ($modx->event->name == \'OnPageNotFound\') {
	$bannery_click = $modx->getOption(\'bannery_click\', null, \'bannerclick\', true);
	if (preg_match(\'/\'.$bannery_click.\'\\/([0-9]+)/\', $_SERVER[\'REQUEST_URI\'], $matches)) {
		$modx->addPackage(\'bannery\', $modx->getOption(\'core_path\') . \'components/bannery/model/\');

		$id = $matches[1];
		$c = $modx->newQuery(\'byAd\');
		$c->select(\'`byAd`.`id`, `Position`.`position`, `byAd`.`url`\');
		$c->leftJoin(\'byAdPosition\', \'Position\', \'Position.ad = byAd.id\');
		$c->where(array(\'Position.id\' => $id));
		if ($ad = $modx->getObject(\'byAd\', $c)) {
			$key = array(
				\'ad\' => $ad->get(\'id\'),
				\'position\' => $ad->get(\'position\'),
				\'ip\' => $_SERVER[\'REMOTE_ADDR\'],
				\'clickdate:LIKE\' => date(\'Y-m-d\') . \'%\'
			);
			if (!$modx->getCount(\'byClick\', $key)) {
				$click = $modx->newObject(\'byClick\', array(
					\'ad\' => $ad->get(\'id\'),
					\'position\' => $ad->get(\'position\'),
					\'clickdate\' => date(\'Y-m-d H:i:s\'),
					\'referrer\' => $_SERVER[\'HTTP_REFERER\'],
					\'ip\' => $_SERVER[\'REMOTE_ADDR\']
				));
				$click->save();
			}
			$url = $ad->get(\'url\');
			$chunk = $modx->newObject(\'modChunk\');
			$chunk->set(\'name\', \'banneryPosition\' . $id);
			$chunk->setContent($url);
			$url = $chunk->process($_GET);

			$modx->sendRedirect($url);
		}
	}
}',
      'locked' => 0,
      'properties' => NULL,
      'disabled' => 0,
      'moduleguid' => '',
      'static' => 0,
      'static_file' => 'core/components/bannery/elements/plugins/plugin.banneryclickout.php',
      'content' => 'if ($modx->event->name == \'OnPageNotFound\') {
	$bannery_click = $modx->getOption(\'bannery_click\', null, \'bannerclick\', true);
	if (preg_match(\'/\'.$bannery_click.\'\\/([0-9]+)/\', $_SERVER[\'REQUEST_URI\'], $matches)) {
		$modx->addPackage(\'bannery\', $modx->getOption(\'core_path\') . \'components/bannery/model/\');

		$id = $matches[1];
		$c = $modx->newQuery(\'byAd\');
		$c->select(\'`byAd`.`id`, `Position`.`position`, `byAd`.`url`\');
		$c->leftJoin(\'byAdPosition\', \'Position\', \'Position.ad = byAd.id\');
		$c->where(array(\'Position.id\' => $id));
		if ($ad = $modx->getObject(\'byAd\', $c)) {
			$key = array(
				\'ad\' => $ad->get(\'id\'),
				\'position\' => $ad->get(\'position\'),
				\'ip\' => $_SERVER[\'REMOTE_ADDR\'],
				\'clickdate:LIKE\' => date(\'Y-m-d\') . \'%\'
			);
			if (!$modx->getCount(\'byClick\', $key)) {
				$click = $modx->newObject(\'byClick\', array(
					\'ad\' => $ad->get(\'id\'),
					\'position\' => $ad->get(\'position\'),
					\'clickdate\' => date(\'Y-m-d H:i:s\'),
					\'referrer\' => $_SERVER[\'HTTP_REFERER\'],
					\'ip\' => $_SERVER[\'REMOTE_ADDR\']
				));
				$click->save();
			}
			$url = $ad->get(\'url\');
			$chunk = $modx->newObject(\'modChunk\');
			$chunk->set(\'name\', \'banneryPosition\' . $id);
			$chunk->setContent($url);
			$url = $chunk->process($_GET);

			$modx->sendRedirect($url);
		}
	}
}',
    ),
  ),
  'a1b116e47a51df40aba2f396e65e0f1c' => 
  array (
    'criteria' => 
    array (
      'pluginid' => 11,
      'event' => 'OnPageNotFound',
    ),
    'object' => 
    array (
      'pluginid' => 11,
      'event' => 'OnPageNotFound',
      'priority' => 0,
      'propertyset' => 0,
    ),
  ),
);
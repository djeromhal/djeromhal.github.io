<?php  return array (
  'resourceClass' => 'modDocument',
  'resource' => 
  array (
    'id' => 37,
    'type' => 'document',
    'contentType' => 'text/html',
    'pagetitle' => 'pp-ware-detail',
    'longtitle' => '',
    'description' => '',
    'alias' => 'pp-ware-detail',
    'link_attributes' => '',
    'published' => 1,
    'pub_date' => 0,
    'unpub_date' => 0,
    'parent' => 3,
    'isfolder' => 0,
    'introtext' => '',
    'content' => '<h2 class="ware_caption">[[#[[!GetPost? &metod=`post` &field=`id`]].longtitle]]</h2>
<div class="row">
	<div class="col-md-6">
		<div class="big">
			<ul>
				[[!ms2Gallery? &resource=`[[!GetPost? &metod=`post` &field=`id`]]` &tplOuter=`@INLINE [[+rows]]` &tplRow=`@INLINE
				<li><a title="[[+title]]" href="[[+url]]" data-lightbox="vpl-gallery"><img title="[[+title]]" src="[[+289x447]]" alt="[[+alt]]" /></a></li>
				` &tplEmpty=`0` &frontend_css=`` ]]
			</ul>
		</div>
		<div class="small">
			<ul>
				[[!ms2Gallery? &resource=`[[!GetPost? &metod=`post` &field=`id`]]` &tplOuter=`@INLINE [[+rows]]` &tplRow=`@INLINE
				<li class="s[[+idx]]"><img title="[[+title]]" src="[[+100x100]]" alt="[[+alt]]" /></li>
				` &tplEmpty=`0` &frontend_css=`` ]]
			</ul>
		</div>
	</div>
	<div class="col-md-6 detail">
		<div class="item availability">
			<div class="data"><span>Склад:</span>в наличии</div>
		</div>
		<div class="item">
			<div class="icon"><img src="uploads/icon/human.svg" alt="количество челов" /></div>
			<div class="desc">
				<div class="name">количество человек</div>
				<div class="value">[[#[[!GetPost? &metod=`post` &field=`id`]].w_count_people:price_sep]]</div>
			</div>
		</div>
		<div class="item">
			<div class="icon"><img src="uploads/icon/max.svg" alt="залповый сброс" /></div>
			<div class="desc">
				<div class="name">глубина входа трубы, см</div>
				<div class="value">[[#[[!GetPost? &metod=`post` &field=`id`]].w_zalp_sbros:price_sep]]</div>
			</div>
		</div>
		<div class="item">
			<div class="icon"><img src="uploads/icon/sliv-24.svg" alt="расчёт на человека" /></div>
			<div class="desc">
				<div class="name">расчёт на человека в сутки, л</div>
				<div class="value">[[#[[!GetPost? &metod=`post` &field=`id`]].w_obem_sbros:price_sep]]</div>
			</div>
		</div>
		<div class="item">
			<div class="icon"><img src="/uploads/icon/max.svg" alt="удаление воды"></div>
			<div class="desc">
				<div class="name">удаление воды</div>
				<div class="value"><span>[[#[[!GetPost? &metod=`post` &field=`id`]].w_udal_vodi]]</span></div>
			</div>
		</div>
		<div class="item">
			<div class="icon"><img src="uploads/icon/ustanovka-green-1.svg" alt="стоимость монтажа" /></div>
			<div class="desc">
				<div class="name">стоимость монтажа, руб</div>
				<div class="value">[[#[[!GetPost? &metod=`post` &field=`id`]].w_cena_montag:price_sep]]</div>
			</div>
		</div>
		<div class="price-block">
			<div class="price">[[#[[!GetPost? &metod=`post` &field=`id`]].w_price:price_sep]] <span>руб</span></div>
			<div class="old_price"><span class="name">цена без скидки </span> <span class="pr">[[#[[!GetPost? &metod=`post` &field=`id`]].w_old_price:price_sep]] руб</span></div>
		</div>
		<div class="button-block">
			<div class="row">
				<div class="col-md-6"><div class="button js-modal-open" data-modal="callback-bid" data-product="[[!GetPost? &metod=`post` &field=`id`]]">Заказать</div></div>
				<div class="col-md-6"><div class="button t2 js-modal-open sm-hide" data-modal="callback-free-meter">Вызвать инженера</div></div>
			</div>
			<div class="row">
				<div class="col-md-12"><div class="button orange sm-hide" onclick="ShowModalKQuizType1()">Смета "под ключ"</div></div>
			</div>
		</div>
	</div>
</div>',
    'richtext' => 0,
    'template' => 0,
    'menuindex' => 3,
    'searchable' => 1,
    'cacheable' => 1,
    'createdby' => 9,
    'createdon' => 1548107976,
    'editedby' => 9,
    'editedon' => 1550231598,
    'deleted' => 0,
    'deletedon' => 0,
    'deletedby' => 0,
    'publishedon' => 1548107940,
    'publishedby' => 9,
    'menutitle' => '',
    'donthit' => 0,
    'privateweb' => 0,
    'privatemgr' => 0,
    'content_dispo' => 0,
    'hidemenu' => 0,
    'class_key' => 'modDocument',
    'context_key' => 'web',
    'content_type' => 1,
    'uri' => 'pp-ware-detail',
    'uri_override' => 1,
    'hide_children_in_tree' => 0,
    'show_in_tree' => 1,
    'properties' => '{"ms2gallery":{"media_source":"3"}}',
    '_content' => '<h2 class="ware_caption">[[#[[!GetPost? &metod=`post` &field=`id`]].longtitle]]</h2>
<div class="row">
	<div class="col-md-6">
		<div class="big">
			<ul>
				[[!ms2Gallery? &resource=`[[!GetPost? &metod=`post` &field=`id`]]` &tplOuter=`@INLINE [[+rows]]` &tplRow=`@INLINE
				<li><a title="[[+title]]" href="[[+url]]" data-lightbox="vpl-gallery"><img title="[[+title]]" src="[[+289x447]]" alt="[[+alt]]" /></a></li>
				` &tplEmpty=`0` &frontend_css=`` ]]
			</ul>
		</div>
		<div class="small">
			<ul>
				[[!ms2Gallery? &resource=`[[!GetPost? &metod=`post` &field=`id`]]` &tplOuter=`@INLINE [[+rows]]` &tplRow=`@INLINE
				<li class="s[[+idx]]"><img title="[[+title]]" src="[[+100x100]]" alt="[[+alt]]" /></li>
				` &tplEmpty=`0` &frontend_css=`` ]]
			</ul>
		</div>
	</div>
	<div class="col-md-6 detail">
		<div class="item availability">
			<div class="data"><span>Склад:</span>в наличии</div>
		</div>
		<div class="item">
			<div class="icon"><img src="uploads/icon/human.svg" alt="количество челов" /></div>
			<div class="desc">
				<div class="name">количество человек</div>
				<div class="value">[[#[[!GetPost? &metod=`post` &field=`id`]].w_count_people:price_sep]]</div>
			</div>
		</div>
		<div class="item">
			<div class="icon"><img src="uploads/icon/max.svg" alt="залповый сброс" /></div>
			<div class="desc">
				<div class="name">глубина входа трубы, см</div>
				<div class="value">[[#[[!GetPost? &metod=`post` &field=`id`]].w_zalp_sbros:price_sep]]</div>
			</div>
		</div>
		<div class="item">
			<div class="icon"><img src="uploads/icon/sliv-24.svg" alt="расчёт на человека" /></div>
			<div class="desc">
				<div class="name">расчёт на человека в сутки, л</div>
				<div class="value">[[#[[!GetPost? &metod=`post` &field=`id`]].w_obem_sbros:price_sep]]</div>
			</div>
		</div>
		<div class="item">
			<div class="icon"><img src="/uploads/icon/max.svg" alt="удаление воды"></div>
			<div class="desc">
				<div class="name">удаление воды</div>
				<div class="value"><span>[[#[[!GetPost? &metod=`post` &field=`id`]].w_udal_vodi]]</span></div>
			</div>
		</div>
		<div class="item">
			<div class="icon"><img src="uploads/icon/ustanovka-green-1.svg" alt="стоимость монтажа" /></div>
			<div class="desc">
				<div class="name">стоимость монтажа, руб</div>
				<div class="value">[[#[[!GetPost? &metod=`post` &field=`id`]].w_cena_montag:price_sep]]</div>
			</div>
		</div>
		<div class="price-block">
			<div class="price">[[#[[!GetPost? &metod=`post` &field=`id`]].w_price:price_sep]] <span>руб</span></div>
			<div class="old_price"><span class="name">цена без скидки </span> <span class="pr">[[#[[!GetPost? &metod=`post` &field=`id`]].w_old_price:price_sep]] руб</span></div>
		</div>
		<div class="button-block">
			<div class="row">
				<div class="col-md-6"><div class="button js-modal-open" data-modal="callback-bid" data-product="[[!GetPost? &metod=`post` &field=`id`]]">Заказать</div></div>
				<div class="col-md-6"><div class="button t2 js-modal-open sm-hide" data-modal="callback-free-meter">Вызвать инженера</div></div>
			</div>
			<div class="row">
				<div class="col-md-12"><div class="button orange sm-hide" onclick="ShowModalKQuizType1()">Смета "под ключ"</div></div>
			</div>
		</div>
	</div>
</div>',
    '_isForward' => false,
  ),
  'contentType' => 
  array (
    'id' => 1,
    'name' => 'HTML',
    'description' => 'HTML content',
    'mime_type' => 'text/html',
    'file_extensions' => '/',
    'headers' => NULL,
    'binary' => 0,
  ),
  'policyCache' => 
  array (
  ),
  'sourceCache' => 
  array (
    'modChunk' => 
    array (
    ),
    'modSnippet' => 
    array (
      'GetPost' => 
      array (
        'fields' => 
        array (
          'id' => 63,
          'source' => 2,
          'property_preprocess' => false,
          'name' => 'GetPost',
          'description' => '',
          'editor_type' => 0,
          'category' => 15,
          'cache_type' => 0,
          'snippet' => '$output=\'\';
if($metod==\'get\')$output=$_GET[$field];
if($metod==\'post\')$output=$_POST[$field];
return (string) $output;',
          'locked' => false,
          'properties' => 
          array (
          ),
          'moduleguid' => '',
          'static' => false,
          'static_file' => '',
          'content' => '$output=\'\';
if($metod==\'get\')$output=$_GET[$field];
if($metod==\'post\')$output=$_POST[$field];
return (string) $output;',
        ),
        'policies' => 
        array (
          'web' => 
          array (
          ),
        ),
        'source' => 
        array (
          'id' => 2,
          'name' => 'Uploads',
          'description' => '',
          'class_key' => 'sources.modFileMediaSource',
          'properties' => 
          array (
            'basePath' => 
            array (
              'name' => 'basePath',
              'desc' => 'prop_file.basePath_desc',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '/uploads/',
              'lexicon' => 'core:source',
            ),
            'baseUrl' => 
            array (
              'name' => 'baseUrl',
              'desc' => 'prop_file.baseUrl_desc',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => 'uploads/',
              'lexicon' => 'core:source',
            ),
          ),
          'is_stream' => true,
        ),
      ),
      'ms2Gallery' => 
      array (
        'fields' => 
        array (
          'id' => 54,
          'source' => 1,
          'property_preprocess' => false,
          'name' => 'ms2Gallery',
          'description' => '',
          'editor_type' => 0,
          'category' => 14,
          'cache_type' => 0,
          'snippet' => '/* @var array $scriptProperties */
/* @var ms2Gallery $ms2Gallery */
$ms2Gallery = $modx->getService(\'ms2gallery\', \'ms2Gallery\', MODX_CORE_PATH . \'components/ms2gallery/model/ms2gallery/\');
/* @var pdoFetch $pdoFetch */
if (!$modx->loadClass(\'pdofetch\', MODX_CORE_PATH . \'components/pdotools/model/pdotools/\', false, true)) {
	return false;
}
$pdoFetch = new pdoFetch($modx, $scriptProperties);

$extensionsDir = $modx->getOption(\'extensionsDir\', $scriptProperties, \'components/ms2gallery/img/mgr/extensions/\', true);

// Register styles and scripts on frontend
$config = $ms2Gallery->makePlaceholders($ms2Gallery->config);
$css = $modx->getOption(\'frontend_css\', $scriptProperties, \'frontend_css\');
if (!empty($css) && preg_match(\'/\\.css/i\', $css)) {
	$modx->regClientCSS(str_replace($config[\'pl\'], $config[\'vl\'], $css));
}
$js = $modx->getOption(\'frontend_js\', $scriptProperties, \'frontend_js\');
if (!empty($js) && preg_match(\'/\\.js/i\', $js)) {
	$modx->regClientScript(str_replace($config[\'pl\'], $config[\'vl\'], $js));
}
if (empty($outputSeparator)) {
	$outputSeparator = "\\n";
}
if (empty($tagsSeparator)) {
	$tagsSeparator = \',\';
}

$where = array(
	\'File.parent\' => 0,
);

// Define where parameters
if ($scriptProperties[\'parents\'] == \'\' && empty($scriptProperties[\'resources\'])) {
	$resources = !empty($resource)
		? $resource
		: $modx->resource->get(\'id\');
	$scriptProperties[\'resources\'] = $resources;
}

if (!empty($filetype)) {
	$where[\'File.type:IN\'] = array_map(\'trim\', explode(\',\', $filetype));
}

if (empty($showInactive)) {
	$where[\'File.active\'] = 1;
}

$innerJoin = array(
	\'File\' => array(
		\'class\' => \'msResourceFile\',
		\'on\' => \'File.resource_id = modResource.id\',
	)
);
if (!empty($tagsVar) && isset($_REQUEST[$tagsVar])) {
	$tags = $modx->stripTags($_REQUEST[$tagsVar]);
}
if (!empty($tags)) {
	$tags = array_map(\'trim\', explode(\',\', str_replace(\'"\', \'\', $tags)));
	$tags = implode(\'","\', $tags);
	$innerJoin[\'Tag\'] = array(
		\'class\' => \'msResourceFileTag\',
		\'on\' => \'Tag.file_id = File.id AND Tag.tag IN ("\' . $tags . \'")\',
	);
}

$select = array(
	\'File\' => \'*\'
);

// Set default sort by File table
if (!empty($sortby)) {
	$sortby = array_map(\'trim\', explode(\',\', $sortby));
	foreach ($sortby as &$value) {
		if (strpos($value, \'.\') === false && strpos($value, \'(\') === false) {
			$value = \'File.\' . $value;
		}
	}
	$scriptProperties[\'sortby\'] = implode(\', \', $sortby);
}

// processing additional query params
foreach (array(\'where\', \'innerJoin\', \'select\') as $v) {
	if (!empty($scriptProperties[$v])) {
		$tmp = $modx->fromJSON($scriptProperties[$v]);
		if (is_array($tmp)) {
			$$v = array_merge($$v, $tmp);
		}
	}
	unset($scriptProperties[$v]);
}

if (empty($limit) && !empty($offset)) {
	$scriptProperties[\'limit\'] = 10000;
}

// Default parameters
$default = array(
	\'class\' => \'modResource\',
	\'innerJoin\' => $innerJoin,
	\'where\' => $modx->toJSON($where),
	\'select\' => $select,
	\'limit\' => 10,
	\'sortby\' => \'rank\',
	\'sortdir\' => \'ASC\',
	\'fastMode\' => false,
	\'groupby\' => \'File.id\',
	\'return\' => \'data\',
	\'nestedChunkPrefix\' => \'ms2gallery_\',
);

// Merge all properties and run!
$scriptProperties[\'tpl\'] = !empty($tplRow) ? $tplRow : \'\';
$pdoFetch->setConfig(array_merge($default, $scriptProperties));
$rows = $pdoFetch->run();

if (!empty($rows)) {
	$tmp = current($rows);
	$resolution = array();
	if ($mediaSource = $modx->getObject(\'sources.modMediaSource\', $tmp[\'source\'])) {
		$properties = $mediaSource->getProperties();
		if (isset($properties[\'thumbnails\'][\'value\'])) {
			$fileTypes = $modx->fromJSON($properties[\'thumbnails\'][\'value\']);
			foreach ($fileTypes as $v) {
				$resolution[] = $v[\'w\'] . \'x\' . $v[\'h\'];
			}
		}
	}
}

// Processing rows
$output = null;
$images = array();
foreach ($rows as $k => $row) {
	$row[\'idx\'] = $pdoFetch->idx++;
	$row[\'tags\'] = \'\';

	if (isset($row[\'type\']) && $row[\'type\'] == \'image\') {
		$q = $modx->newQuery(\'msResourceFile\', array(\'parent\' => $row[\'id\']));
		$q->select(\'url\');
		$tstart = microtime(true);
		if ($q->prepare() && $q->stmt->execute()) {
			$modx->queryTime += microtime(true) - $tstart;
			$modx->executedQueries++;
			while ($tmp = $q->stmt->fetchColumn()) {
				if (preg_match(\'/((?:\\d{1,4}|)x(?:\\d{1,4}|))/\', $tmp, $size)) {
					$row[$size[0]] = $tmp;
				}
			}
		}
	}
	elseif (!empty($row[\'type\'])) {
		$row[\'thumbnail\'] = file_exists(MODX_ASSETS_PATH . $extensionsDir . $row[\'type\'] . \'.png\')
			? MODX_ASSETS_URL . $extensionsDir . $row[\'type\'] . \'.png\'
			: MODX_ASSETS_URL . $extensionsDir . \'other.png\';
		foreach ($resolution as $v) {
			$row[$v] = $row[\'thumbnail\'];
		}
	}

	if (!empty($getTags)) {
		$q = $modx->newQuery(\'msResourceFileTag\', array(\'file_id\' => $row[\'id\']));
		$q->select(\'tag\');
		$tstart = microtime(true);
		if ($q->prepare() && $q->stmt->execute()) {
			$modx->queryTime += microtime(true) - $tstart;
			$modx->executedQueries++;
			$row[\'tags\'] = implode($tagsSeparator, $q->stmt->fetchAll(PDO::FETCH_COLUMN));
		}
	}

	$images[] = $row;
}
$pdoFetch->addTime(!empty($getTags) ? \'Thumbnails and tags was retrieved\' : \'Thumbnails was retrieved\');

// Processing chunks
$output = array();
foreach ($images as $row) {
	$tpl = $pdoFetch->defineChunk($row);

	$output[] = empty($tpl)
		? \'<pre>\' . $pdoFetch->getChunk(\'\', $row) . \'</pre>\'
		: $pdoFetch->getChunk($tpl, $row, $pdoFetch->config[\'fastMode\']);
}
$pdoFetch->addTime(\'Rows was templated\');

// Return output
$log = \'\';
if ($modx->user->hasSessionContext(\'mgr\') && !empty($showLog)) {
	$log .= \'<pre class="ms2GalleryLog">\' . print_r($pdoFetch->getTime(), 1) . \'</pre>\';
}

if (!empty($toSeparatePlaceholders)) {
	$output[\'log\'] = $log;
	$modx->setPlaceholders($output, $toSeparatePlaceholders);
}
else {
	if (count($output) === 1 && !empty($tplSingle)) {
		$output = $pdoFetch->getChunk($tplSingle, array_shift($images));
	}
	else {
		$output = implode($outputSeparator, $output);

		if (!empty($output)) {
			$arr = array_shift($images);
			$arr[\'rows\'] = $output;
			if (!empty($tplOuter)) {
				$output = $pdoFetch->getChunk($tplOuter, $arr);
			}
		}
		else {
			$output = !empty($tplEmpty)
				? $pdoFetch->getChunk($tplEmpty)
				: \'\';
		}
	}

	$output .= $log;
	if (!empty($toPlaceholder)) {
		$modx->setPlaceholder($toPlaceholder, $output);
	}
	else {
		return $output;
	}
}',
          'locked' => false,
          'properties' => 
          array (
            'parents' => 
            array (
              'name' => 'parents',
              'desc' => 'ms2gallery_prop_parents',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '',
              'lexicon' => 'ms2gallery:properties',
              'area' => '',
              'desc_trans' => 'Список категорий, через запятую, для поиска результатов. По умолчанию выборка ограничена текущим родителем. Если поставить 0 - выборка не ограничивается.',
              'area_trans' => '',
            ),
            'resources' => 
            array (
              'name' => 'resources',
              'desc' => 'ms2gallery_prop_resources',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '',
              'lexicon' => 'ms2gallery:properties',
              'area' => '',
              'desc_trans' => 'Список ресурсов, через запятую, для вывода в результатах. Если id товара начинается с минуса, этот товар исключается из выборки.',
              'area_trans' => '',
            ),
            'showLog' => 
            array (
              'name' => 'showLog',
              'desc' => 'ms2gallery_prop_showLog',
              'type' => 'combo-boolean',
              'options' => 
              array (
              ),
              'value' => false,
              'lexicon' => 'ms2gallery:properties',
              'area' => '',
              'desc_trans' => 'Показывать дополнительную информацию о работе сниппета. Только для авторизованных в контекте "mgr".',
              'area_trans' => '',
            ),
            'toPlaceholder' => 
            array (
              'name' => 'toPlaceholder',
              'desc' => 'ms2gallery_prop_toPlaceholder',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '',
              'lexicon' => 'ms2gallery:properties',
              'area' => '',
              'desc_trans' => 'Если не пусто, сниппет сохранит все данные в плейсхолдер с этим именем, вместо вывода не экран.',
              'area_trans' => '',
            ),
            'tplRow' => 
            array (
              'name' => 'tplRow',
              'desc' => 'ms2gallery_prop_tplRow',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => 'tpl.ms2Gallery.row',
              'lexicon' => 'ms2gallery:properties',
              'area' => '',
              'desc_trans' => 'Чанк оформления одного элемента выборки.',
              'area_trans' => '',
            ),
            'tplOuter' => 
            array (
              'name' => 'tplOuter',
              'desc' => 'ms2gallery_prop_tplOuter',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => 'tpl.ms2Gallery.outer',
              'lexicon' => 'ms2gallery:properties',
              'area' => '',
              'desc_trans' => 'Обёртка для вывода результатов работы сниппета.',
              'area_trans' => '',
            ),
            'tplEmpty' => 
            array (
              'name' => 'tplEmpty',
              'desc' => 'ms2gallery_prop_tplEmpty',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => 'tpl.ms2Gallery.empty',
              'lexicon' => 'ms2gallery:properties',
              'area' => '',
              'desc_trans' => 'Чанк, который выводится при отсутствии результатов.',
              'area_trans' => '',
            ),
            'tplSingle' => 
            array (
              'name' => 'tplSingle',
              'desc' => 'ms2gallery_prop_tplSingle',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '',
              'lexicon' => 'ms2gallery:properties',
              'area' => '',
              'desc_trans' => 'Чанк, который используется если получен всего один файл.',
              'area_trans' => '',
            ),
            'limit' => 
            array (
              'name' => 'limit',
              'desc' => 'ms2gallery_prop_limit',
              'type' => 'numberfield',
              'options' => 
              array (
              ),
              'value' => 0,
              'lexicon' => 'ms2gallery:properties',
              'area' => '',
              'desc_trans' => 'Лимит выборки результатов',
              'area_trans' => '',
            ),
            'offset' => 
            array (
              'name' => 'offset',
              'desc' => 'ms2gallery_prop_offset',
              'type' => 'numberfield',
              'options' => 
              array (
              ),
              'value' => 0,
              'lexicon' => 'ms2gallery:properties',
              'area' => '',
              'desc_trans' => 'Пропуск результатов с начала выборки',
              'area_trans' => '',
            ),
            'where' => 
            array (
              'name' => 'where',
              'desc' => 'ms2gallery_prop_where',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '',
              'lexicon' => 'ms2gallery:properties',
              'area' => '',
              'desc_trans' => 'Строка, закодированная в JSON, с дополнительными условиями выборки. Для фильтрации по файлам нужно использовать псевдоним таблицы "File". Например &where=`{"File.name:LIKE":"%img%"}`.',
              'area_trans' => '',
            ),
            'filetype' => 
            array (
              'name' => 'filetype',
              'desc' => 'ms2gallery_prop_filetype',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '',
              'lexicon' => 'ms2gallery:properties',
              'area' => '',
              'desc_trans' => 'Тип файлов для выборки. Можно использовать "image" для указания картинок и расширения для остальных файлов. Например: "image,pdf,xls,doc".',
              'area_trans' => '',
            ),
            'showInactive' => 
            array (
              'name' => 'showInactive',
              'desc' => 'ms2gallery_prop_showInactive',
              'type' => 'combo-boolean',
              'options' => 
              array (
              ),
              'value' => false,
              'lexicon' => 'ms2gallery:properties',
              'area' => '',
              'desc_trans' => 'Показывать неактивные файлы.',
              'area_trans' => '',
            ),
            'sortby' => 
            array (
              'name' => 'sortby',
              'desc' => 'ms2gallery_prop_sortby',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => 'rank',
              'lexicon' => 'ms2gallery:properties',
              'area' => '',
              'desc_trans' => 'Сортировка выборки.',
              'area_trans' => '',
            ),
            'sortdir' => 
            array (
              'name' => 'sortdir',
              'desc' => 'ms2gallery_prop_sortdir',
              'type' => 'list',
              'options' => 
              array (
                0 => 
                array (
                  'text' => 'ASC',
                  'value' => 'ASC',
                  'name' => 'ASC',
                ),
                1 => 
                array (
                  'text' => 'DESC',
                  'value' => 'DESC',
                  'name' => 'DESC',
                ),
              ),
              'value' => 'ASC',
              'lexicon' => 'ms2gallery:properties',
              'area' => '',
              'desc_trans' => 'Направление сортировки',
              'area_trans' => '',
            ),
            'frontend_css' => 
            array (
              'name' => 'frontend_css',
              'desc' => 'ms2gallery_prop_frontend_css',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '[[+cssUrl]]web/default.css',
              'lexicon' => 'ms2gallery:properties',
              'area' => '',
              'desc_trans' => 'Если вы хотите использовать собственные стили - укажите путь к ним здесь, или очистите параметр и загрузите их вручную через шаблон сайта.',
              'area_trans' => '',
            ),
            'frontend_js' => 
            array (
              'name' => 'frontend_js',
              'desc' => 'ms2gallery_prop_frontend_js',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '[[+jsUrl]]web/default.js',
              'lexicon' => 'ms2gallery:properties',
              'area' => '',
              'desc_trans' => 'Если вы хотите использовать собственные скрипты - укажите путь к ним здесь, или очистите параметр и загрузите их вручную через шаблон сайта.',
              'area_trans' => '',
            ),
            'tags' => 
            array (
              'name' => 'tags',
              'desc' => 'ms2gallery_prop_tags',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '',
              'lexicon' => 'ms2gallery:properties',
              'area' => '',
              'desc_trans' => 'Список тегов, разделённых запятыми, для вывода файлов.',
              'area_trans' => '',
            ),
            'tagsVar' => 
            array (
              'name' => 'tagsVar',
              'desc' => 'ms2gallery_prop_tagsVar',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '',
              'lexicon' => 'ms2gallery:properties',
              'area' => '',
              'desc_trans' => 'Если этот параметр не пуст, то сниппет будет принимать из значение "tags" в $_REQUEST[указанноеимя]. Например, если вы укажите здесь "tag", то сниппет будет выводить только файлы, подходящие в $_REQUEST["tag"].',
              'area_trans' => '',
            ),
            'getTags' => 
            array (
              'name' => 'getTags',
              'desc' => 'ms2gallery_prop_getTags',
              'type' => 'combo-boolean',
              'options' => 
              array (
              ),
              'value' => false,
              'lexicon' => 'ms2gallery:properties',
              'area' => '',
              'desc_trans' => 'Сделать дополнительные запросы, чтобы получить строку с тегами файла?',
              'area_trans' => '',
            ),
            'tagsSeparator' => 
            array (
              'name' => 'tagsSeparator',
              'desc' => 'ms2gallery_prop_tagsSeparator',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => ',',
              'lexicon' => 'ms2gallery:properties',
              'area' => '',
              'desc_trans' => 'Если вы включили получение тегов файлов при выводе, они будут разделены через строку, указанную в этом параметре.',
              'area_trans' => '',
            ),
          ),
          'moduleguid' => '',
          'static' => false,
          'static_file' => 'core/components/ms2gallery/elements/snippets/snippet.ms2gallery.php',
          'content' => '/* @var array $scriptProperties */
/* @var ms2Gallery $ms2Gallery */
$ms2Gallery = $modx->getService(\'ms2gallery\', \'ms2Gallery\', MODX_CORE_PATH . \'components/ms2gallery/model/ms2gallery/\');
/* @var pdoFetch $pdoFetch */
if (!$modx->loadClass(\'pdofetch\', MODX_CORE_PATH . \'components/pdotools/model/pdotools/\', false, true)) {
	return false;
}
$pdoFetch = new pdoFetch($modx, $scriptProperties);

$extensionsDir = $modx->getOption(\'extensionsDir\', $scriptProperties, \'components/ms2gallery/img/mgr/extensions/\', true);

// Register styles and scripts on frontend
$config = $ms2Gallery->makePlaceholders($ms2Gallery->config);
$css = $modx->getOption(\'frontend_css\', $scriptProperties, \'frontend_css\');
if (!empty($css) && preg_match(\'/\\.css/i\', $css)) {
	$modx->regClientCSS(str_replace($config[\'pl\'], $config[\'vl\'], $css));
}
$js = $modx->getOption(\'frontend_js\', $scriptProperties, \'frontend_js\');
if (!empty($js) && preg_match(\'/\\.js/i\', $js)) {
	$modx->regClientScript(str_replace($config[\'pl\'], $config[\'vl\'], $js));
}
if (empty($outputSeparator)) {
	$outputSeparator = "\\n";
}
if (empty($tagsSeparator)) {
	$tagsSeparator = \',\';
}

$where = array(
	\'File.parent\' => 0,
);

// Define where parameters
if ($scriptProperties[\'parents\'] == \'\' && empty($scriptProperties[\'resources\'])) {
	$resources = !empty($resource)
		? $resource
		: $modx->resource->get(\'id\');
	$scriptProperties[\'resources\'] = $resources;
}

if (!empty($filetype)) {
	$where[\'File.type:IN\'] = array_map(\'trim\', explode(\',\', $filetype));
}

if (empty($showInactive)) {
	$where[\'File.active\'] = 1;
}

$innerJoin = array(
	\'File\' => array(
		\'class\' => \'msResourceFile\',
		\'on\' => \'File.resource_id = modResource.id\',
	)
);
if (!empty($tagsVar) && isset($_REQUEST[$tagsVar])) {
	$tags = $modx->stripTags($_REQUEST[$tagsVar]);
}
if (!empty($tags)) {
	$tags = array_map(\'trim\', explode(\',\', str_replace(\'"\', \'\', $tags)));
	$tags = implode(\'","\', $tags);
	$innerJoin[\'Tag\'] = array(
		\'class\' => \'msResourceFileTag\',
		\'on\' => \'Tag.file_id = File.id AND Tag.tag IN ("\' . $tags . \'")\',
	);
}

$select = array(
	\'File\' => \'*\'
);

// Set default sort by File table
if (!empty($sortby)) {
	$sortby = array_map(\'trim\', explode(\',\', $sortby));
	foreach ($sortby as &$value) {
		if (strpos($value, \'.\') === false && strpos($value, \'(\') === false) {
			$value = \'File.\' . $value;
		}
	}
	$scriptProperties[\'sortby\'] = implode(\', \', $sortby);
}

// processing additional query params
foreach (array(\'where\', \'innerJoin\', \'select\') as $v) {
	if (!empty($scriptProperties[$v])) {
		$tmp = $modx->fromJSON($scriptProperties[$v]);
		if (is_array($tmp)) {
			$$v = array_merge($$v, $tmp);
		}
	}
	unset($scriptProperties[$v]);
}

if (empty($limit) && !empty($offset)) {
	$scriptProperties[\'limit\'] = 10000;
}

// Default parameters
$default = array(
	\'class\' => \'modResource\',
	\'innerJoin\' => $innerJoin,
	\'where\' => $modx->toJSON($where),
	\'select\' => $select,
	\'limit\' => 10,
	\'sortby\' => \'rank\',
	\'sortdir\' => \'ASC\',
	\'fastMode\' => false,
	\'groupby\' => \'File.id\',
	\'return\' => \'data\',
	\'nestedChunkPrefix\' => \'ms2gallery_\',
);

// Merge all properties and run!
$scriptProperties[\'tpl\'] = !empty($tplRow) ? $tplRow : \'\';
$pdoFetch->setConfig(array_merge($default, $scriptProperties));
$rows = $pdoFetch->run();

if (!empty($rows)) {
	$tmp = current($rows);
	$resolution = array();
	if ($mediaSource = $modx->getObject(\'sources.modMediaSource\', $tmp[\'source\'])) {
		$properties = $mediaSource->getProperties();
		if (isset($properties[\'thumbnails\'][\'value\'])) {
			$fileTypes = $modx->fromJSON($properties[\'thumbnails\'][\'value\']);
			foreach ($fileTypes as $v) {
				$resolution[] = $v[\'w\'] . \'x\' . $v[\'h\'];
			}
		}
	}
}

// Processing rows
$output = null;
$images = array();
foreach ($rows as $k => $row) {
	$row[\'idx\'] = $pdoFetch->idx++;
	$row[\'tags\'] = \'\';

	if (isset($row[\'type\']) && $row[\'type\'] == \'image\') {
		$q = $modx->newQuery(\'msResourceFile\', array(\'parent\' => $row[\'id\']));
		$q->select(\'url\');
		$tstart = microtime(true);
		if ($q->prepare() && $q->stmt->execute()) {
			$modx->queryTime += microtime(true) - $tstart;
			$modx->executedQueries++;
			while ($tmp = $q->stmt->fetchColumn()) {
				if (preg_match(\'/((?:\\d{1,4}|)x(?:\\d{1,4}|))/\', $tmp, $size)) {
					$row[$size[0]] = $tmp;
				}
			}
		}
	}
	elseif (!empty($row[\'type\'])) {
		$row[\'thumbnail\'] = file_exists(MODX_ASSETS_PATH . $extensionsDir . $row[\'type\'] . \'.png\')
			? MODX_ASSETS_URL . $extensionsDir . $row[\'type\'] . \'.png\'
			: MODX_ASSETS_URL . $extensionsDir . \'other.png\';
		foreach ($resolution as $v) {
			$row[$v] = $row[\'thumbnail\'];
		}
	}

	if (!empty($getTags)) {
		$q = $modx->newQuery(\'msResourceFileTag\', array(\'file_id\' => $row[\'id\']));
		$q->select(\'tag\');
		$tstart = microtime(true);
		if ($q->prepare() && $q->stmt->execute()) {
			$modx->queryTime += microtime(true) - $tstart;
			$modx->executedQueries++;
			$row[\'tags\'] = implode($tagsSeparator, $q->stmt->fetchAll(PDO::FETCH_COLUMN));
		}
	}

	$images[] = $row;
}
$pdoFetch->addTime(!empty($getTags) ? \'Thumbnails and tags was retrieved\' : \'Thumbnails was retrieved\');

// Processing chunks
$output = array();
foreach ($images as $row) {
	$tpl = $pdoFetch->defineChunk($row);

	$output[] = empty($tpl)
		? \'<pre>\' . $pdoFetch->getChunk(\'\', $row) . \'</pre>\'
		: $pdoFetch->getChunk($tpl, $row, $pdoFetch->config[\'fastMode\']);
}
$pdoFetch->addTime(\'Rows was templated\');

// Return output
$log = \'\';
if ($modx->user->hasSessionContext(\'mgr\') && !empty($showLog)) {
	$log .= \'<pre class="ms2GalleryLog">\' . print_r($pdoFetch->getTime(), 1) . \'</pre>\';
}

if (!empty($toSeparatePlaceholders)) {
	$output[\'log\'] = $log;
	$modx->setPlaceholders($output, $toSeparatePlaceholders);
}
else {
	if (count($output) === 1 && !empty($tplSingle)) {
		$output = $pdoFetch->getChunk($tplSingle, array_shift($images));
	}
	else {
		$output = implode($outputSeparator, $output);

		if (!empty($output)) {
			$arr = array_shift($images);
			$arr[\'rows\'] = $output;
			if (!empty($tplOuter)) {
				$output = $pdoFetch->getChunk($tplOuter, $arr);
			}
		}
		else {
			$output = !empty($tplEmpty)
				? $pdoFetch->getChunk($tplEmpty)
				: \'\';
		}
	}

	$output .= $log;
	if (!empty($toPlaceholder)) {
		$modx->setPlaceholder($toPlaceholder, $output);
	}
	else {
		return $output;
	}
}',
        ),
        'policies' => 
        array (
          'web' => 
          array (
          ),
        ),
        'source' => 
        array (
          'id' => 1,
          'name' => 'Filesystem',
          'description' => '',
          'class_key' => 'sources.modFileMediaSource',
          'properties' => 
          array (
          ),
          'is_stream' => true,
        ),
      ),
      'price_sep' => 
      array (
        'fields' => 
        array (
          'id' => 61,
          'source' => 2,
          'property_preprocess' => false,
          'name' => 'price_sep',
          'description' => '',
          'editor_type' => 0,
          'category' => 0,
          'cache_type' => 0,
          'snippet' => 'return number_format($input, 0, \',\', \' \' );',
          'locked' => false,
          'properties' => 
          array (
          ),
          'moduleguid' => '',
          'static' => false,
          'static_file' => '',
          'content' => 'return number_format($input, 0, \',\', \' \' );',
        ),
        'policies' => 
        array (
          'web' => 
          array (
          ),
        ),
        'source' => 
        array (
          'id' => 2,
          'name' => 'Uploads',
          'description' => '',
          'class_key' => 'sources.modFileMediaSource',
          'properties' => 
          array (
            'basePath' => 
            array (
              'name' => 'basePath',
              'desc' => 'prop_file.basePath_desc',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '/uploads/',
              'lexicon' => 'core:source',
            ),
            'baseUrl' => 
            array (
              'name' => 'baseUrl',
              'desc' => 'prop_file.baseUrl_desc',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => 'uploads/',
              'lexicon' => 'core:source',
            ),
          ),
          'is_stream' => true,
        ),
      ),
    ),
    'modTemplateVar' => 
    array (
      'w_count_people' => 
      array (
        'fields' => 
        array (
          'id' => 56,
          'source' => 2,
          'property_preprocess' => false,
          'type' => 'text',
          'name' => 'w_count_people',
          'caption' => 'Количество человек',
          'description' => '',
          'editor_type' => 0,
          'category' => 13,
          'locked' => false,
          'elements' => '',
          'rank' => 1,
          'display' => 'default',
          'default_text' => '',
          'properties' => 
          array (
          ),
          'input_properties' => 
          array (
            'allowBlank' => 'true',
            'minLength' => '',
            'maxLength' => '',
            'regex' => '',
            'regexText' => '',
          ),
          'output_properties' => 
          array (
          ),
          'static' => false,
          'static_file' => '',
          'content' => '',
        ),
        'policies' => 
        array (
          'web' => 
          array (
          ),
        ),
        'source' => 
        array (
          'id' => 2,
          'name' => 'Uploads',
          'description' => '',
          'class_key' => 'sources.modFileMediaSource',
          'properties' => 
          array (
            'basePath' => 
            array (
              'name' => 'basePath',
              'desc' => 'prop_file.basePath_desc',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '/uploads/',
              'lexicon' => 'core:source',
            ),
            'baseUrl' => 
            array (
              'name' => 'baseUrl',
              'desc' => 'prop_file.baseUrl_desc',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => 'uploads/',
              'lexicon' => 'core:source',
            ),
          ),
          'is_stream' => true,
        ),
      ),
      'w_zalp_sbros' => 
      array (
        'fields' => 
        array (
          'id' => 57,
          'source' => 2,
          'property_preprocess' => false,
          'type' => 'text',
          'name' => 'w_zalp_sbros',
          'caption' => 'Залповый сброс, л',
          'description' => '',
          'editor_type' => 0,
          'category' => 13,
          'locked' => false,
          'elements' => '',
          'rank' => 2,
          'display' => 'default',
          'default_text' => '',
          'properties' => 
          array (
          ),
          'input_properties' => 
          array (
            'allowBlank' => 'true',
            'minLength' => '',
            'maxLength' => '',
            'regex' => '',
            'regexText' => '',
          ),
          'output_properties' => 
          array (
          ),
          'static' => false,
          'static_file' => '',
          'content' => '',
        ),
        'policies' => 
        array (
          'web' => 
          array (
          ),
        ),
        'source' => 
        array (
          'id' => 2,
          'name' => 'Uploads',
          'description' => '',
          'class_key' => 'sources.modFileMediaSource',
          'properties' => 
          array (
            'basePath' => 
            array (
              'name' => 'basePath',
              'desc' => 'prop_file.basePath_desc',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '/uploads/',
              'lexicon' => 'core:source',
            ),
            'baseUrl' => 
            array (
              'name' => 'baseUrl',
              'desc' => 'prop_file.baseUrl_desc',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => 'uploads/',
              'lexicon' => 'core:source',
            ),
          ),
          'is_stream' => true,
        ),
      ),
      'w_obem_sbros' => 
      array (
        'fields' => 
        array (
          'id' => 58,
          'source' => 2,
          'property_preprocess' => false,
          'type' => 'text',
          'name' => 'w_obem_sbros',
          'caption' => 'Расчёт на человека в сутки, л',
          'description' => '',
          'editor_type' => 0,
          'category' => 13,
          'locked' => false,
          'elements' => '',
          'rank' => 3,
          'display' => 'default',
          'default_text' => '',
          'properties' => 
          array (
          ),
          'input_properties' => 
          array (
            'allowBlank' => 'true',
            'minLength' => '',
            'maxLength' => '',
            'regex' => '',
            'regexText' => '',
          ),
          'output_properties' => 
          array (
          ),
          'static' => false,
          'static_file' => '',
          'content' => '',
        ),
        'policies' => 
        array (
          'web' => 
          array (
          ),
        ),
        'source' => 
        array (
          'id' => 2,
          'name' => 'Uploads',
          'description' => '',
          'class_key' => 'sources.modFileMediaSource',
          'properties' => 
          array (
            'basePath' => 
            array (
              'name' => 'basePath',
              'desc' => 'prop_file.basePath_desc',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '/uploads/',
              'lexicon' => 'core:source',
            ),
            'baseUrl' => 
            array (
              'name' => 'baseUrl',
              'desc' => 'prop_file.baseUrl_desc',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => 'uploads/',
              'lexicon' => 'core:source',
            ),
          ),
          'is_stream' => true,
        ),
      ),
      'w_udal_vodi' => 
      array (
        'fields' => 
        array (
          'id' => 84,
          'source' => 2,
          'property_preprocess' => false,
          'type' => 'text',
          'name' => 'w_udal_vodi',
          'caption' => 'Удаление воды',
          'description' => '',
          'editor_type' => 0,
          'category' => 13,
          'locked' => false,
          'elements' => '',
          'rank' => 4,
          'display' => 'default',
          'default_text' => '',
          'properties' => 
          array (
          ),
          'input_properties' => 
          array (
            'allowBlank' => 'true',
            'minLength' => '',
            'maxLength' => '',
            'regex' => '',
            'regexText' => '',
          ),
          'output_properties' => 
          array (
          ),
          'static' => false,
          'static_file' => '',
          'content' => '',
        ),
        'policies' => 
        array (
          'web' => 
          array (
          ),
        ),
        'source' => 
        array (
          'id' => 2,
          'name' => 'Uploads',
          'description' => '',
          'class_key' => 'sources.modFileMediaSource',
          'properties' => 
          array (
            'basePath' => 
            array (
              'name' => 'basePath',
              'desc' => 'prop_file.basePath_desc',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '/uploads/',
              'lexicon' => 'core:source',
            ),
            'baseUrl' => 
            array (
              'name' => 'baseUrl',
              'desc' => 'prop_file.baseUrl_desc',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => 'uploads/',
              'lexicon' => 'core:source',
            ),
          ),
          'is_stream' => true,
        ),
      ),
      'w_cena_montag' => 
      array (
        'fields' => 
        array (
          'id' => 59,
          'source' => 2,
          'property_preprocess' => false,
          'type' => 'text',
          'name' => 'w_cena_montag',
          'caption' => 'Стоимость монтажа, руб.',
          'description' => '',
          'editor_type' => 0,
          'category' => 13,
          'locked' => false,
          'elements' => '',
          'rank' => 5,
          'display' => 'default',
          'default_text' => '',
          'properties' => 
          array (
          ),
          'input_properties' => 
          array (
            'allowBlank' => 'true',
            'minLength' => '',
            'maxLength' => '',
            'regex' => '',
            'regexText' => '',
          ),
          'output_properties' => 
          array (
          ),
          'static' => false,
          'static_file' => '',
          'content' => '',
        ),
        'policies' => 
        array (
          'web' => 
          array (
          ),
        ),
        'source' => 
        array (
          'id' => 2,
          'name' => 'Uploads',
          'description' => '',
          'class_key' => 'sources.modFileMediaSource',
          'properties' => 
          array (
            'basePath' => 
            array (
              'name' => 'basePath',
              'desc' => 'prop_file.basePath_desc',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '/uploads/',
              'lexicon' => 'core:source',
            ),
            'baseUrl' => 
            array (
              'name' => 'baseUrl',
              'desc' => 'prop_file.baseUrl_desc',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => 'uploads/',
              'lexicon' => 'core:source',
            ),
          ),
          'is_stream' => true,
        ),
      ),
      'w_price' => 
      array (
        'fields' => 
        array (
          'id' => 61,
          'source' => 2,
          'property_preprocess' => false,
          'type' => 'text',
          'name' => 'w_price',
          'caption' => 'Цена',
          'description' => '',
          'editor_type' => 0,
          'category' => 13,
          'locked' => false,
          'elements' => '',
          'rank' => 6,
          'display' => 'default',
          'default_text' => '',
          'properties' => 
          array (
          ),
          'input_properties' => 
          array (
            'allowBlank' => 'true',
            'minLength' => '',
            'maxLength' => '',
            'regex' => '',
            'regexText' => '',
          ),
          'output_properties' => 
          array (
          ),
          'static' => false,
          'static_file' => '',
          'content' => '',
        ),
        'policies' => 
        array (
          'web' => 
          array (
          ),
        ),
        'source' => 
        array (
          'id' => 2,
          'name' => 'Uploads',
          'description' => '',
          'class_key' => 'sources.modFileMediaSource',
          'properties' => 
          array (
            'basePath' => 
            array (
              'name' => 'basePath',
              'desc' => 'prop_file.basePath_desc',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '/uploads/',
              'lexicon' => 'core:source',
            ),
            'baseUrl' => 
            array (
              'name' => 'baseUrl',
              'desc' => 'prop_file.baseUrl_desc',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => 'uploads/',
              'lexicon' => 'core:source',
            ),
          ),
          'is_stream' => true,
        ),
      ),
      'w_old_price' => 
      array (
        'fields' => 
        array (
          'id' => 60,
          'source' => 2,
          'property_preprocess' => false,
          'type' => 'text',
          'name' => 'w_old_price',
          'caption' => 'Цена без скидки',
          'description' => '',
          'editor_type' => 0,
          'category' => 13,
          'locked' => false,
          'elements' => '',
          'rank' => 5,
          'display' => 'default',
          'default_text' => '',
          'properties' => 
          array (
          ),
          'input_properties' => 
          array (
            'allowBlank' => 'true',
            'minLength' => '',
            'maxLength' => '',
            'regex' => '',
            'regexText' => '',
          ),
          'output_properties' => 
          array (
          ),
          'static' => false,
          'static_file' => '',
          'content' => '',
        ),
        'policies' => 
        array (
          'web' => 
          array (
          ),
        ),
        'source' => 
        array (
          'id' => 2,
          'name' => 'Uploads',
          'description' => '',
          'class_key' => 'sources.modFileMediaSource',
          'properties' => 
          array (
            'basePath' => 
            array (
              'name' => 'basePath',
              'desc' => 'prop_file.basePath_desc',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => '/uploads/',
              'lexicon' => 'core:source',
            ),
            'baseUrl' => 
            array (
              'name' => 'baseUrl',
              'desc' => 'prop_file.baseUrl_desc',
              'type' => 'textfield',
              'options' => 
              array (
              ),
              'value' => 'uploads/',
              'lexicon' => 'core:source',
            ),
          ),
          'is_stream' => true,
        ),
      ),
    ),
  ),
);
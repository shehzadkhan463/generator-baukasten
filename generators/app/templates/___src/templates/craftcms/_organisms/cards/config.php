<?php
$defaultItem = array(
    'title' => 'This is a card.',
    'url' => 'http://baukasten.io',
    'entryImage' => \craft\elements\Asset::find()->id('169'),
    'entryIntroText' => '<p>Lorem ipsum dolor sit amet, quas appetere qui te, vel ne enim putent tractatos, ullum inani et duo. Per placerat ocurreret te, eos diceret accumsan in? Qui no viderer vivendum facilisi, pro illud possim legimus at. Illum sonet numquam id vis. Ei accumsan nominati eos?</p>',
    'image' => true,
    'content' => true,
    'link' => true
);

$defaultVariant = [
    'title' => 'Cards',
    'status' => 'wip',
    'description' => 'cards Description goes here…',
    'cn' => 'o-cards',
    'modifiers' => [],
    'customClasses' => [],
    'data' => [],
    'js' => null,
    'waypoint' => null,
    'waypointAni' => null,
    'items' => [
        $defaultItem,
        $defaultItem,
        $defaultItem,
        $defaultItem,
        $defaultItem,
        $defaultItem,
    ],
    'pageInfo' => null,
    'pagination' => null,
    'paginationSimple' => null
];

return [
    'meta' => [
        'title' => 'Cards',
        'status' => 'none',
        'visible' => true,
        'type' => 'organism',
        'path' => '_organisms/cards/',
        'description' => 'cards Description goes here…'
    ],
    'variants' => [
        'cards' => array_merge($defaultVariant, []),
        'cards--noImages' => array_merge($defaultVariant, [
            'title' => 'Cards without Image',
            'image' => false,
        ]),
        'cards--noContent' => array_merge($defaultVariant, [
            'title' => 'Cards without Content',
            'content' => false,
        ]),
        'cards--noLink' => array_merge($defaultVariant, [
            'title' => 'Cards without Link',
            'link' => false,
        ]),
    ]
];
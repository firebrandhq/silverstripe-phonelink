<?php
use SilverStripe\Core\Manifest\ModuleLoader;
use SilverStripe\TinyMCE\TinyMCEConfig;

call_user_func(function () {
    $module = ModuleLoader::inst()->getManifest()->getModule('firebrandhq/silverstripe-phonelink');

    // Enable insert-link to phone numbers
    TinyMCEConfig::get('cms')
        ->enablePlugins([
            'sslinkphone' => $module->getResource('client/dist/js/TinyMCE_sslink-phone.js'),
        ]);
});

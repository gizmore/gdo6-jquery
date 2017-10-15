<?php
namespace GDO\JQuery;
use GDO\Core\GDO_Module;
use GDO\Core\Module_Core;
final class Module_JQuery extends GDO_Module
{
    public $module_priority = 5;
    
    public function onIncludeScripts()
    {
        $min = Module_Core::instance()->cfgMinifyJS() === 'no' ? '' : '.min';
        $this->addBowerJavascript("jquery/dist/jquery$min.js");
    }
}
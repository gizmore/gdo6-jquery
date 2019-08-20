<?php
namespace GDO\JQuery;

use GDO\Core\GDO_Module;
use GDO\Core\Module_Core;

/**
 * This module adds jquery to your application.
 * 
 * @author gizmore
 * @version 6.10
 * @since 6.00
 */
final class Module_JQuery extends GDO_Module
{
	public $module_priority = 5;
	
	public function onIncludeScripts()
	{
		$min = Module_Core::instance()->cfgMinifyJS() === 'no' ? '' : '.min';
		
		$this->addBowerJavascript("jquery/dist/jquery$min.js");
		$this->addBowerJavascript("jquery-modal/jquery.modal$min.js");
		$this->addBowerCSS("jquery-modal/jquery.modal$min.css");

		$this->addJavascript('js/gdo-jquery.js');
	}
}

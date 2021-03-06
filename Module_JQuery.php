<?php
namespace GDO\JQuery;

use GDO\Core\GDO_Module;
use GDO\Javascript\Module_Javascript;

/**
 * This module adds jquery to your application.
 * 
 * @author gizmore
 * @version 6.10.3
 * @since 6.0.0
 */
final class Module_JQuery extends GDO_Module
{
	public $module_priority = 5;
	
	public function onIncludeScripts()
	{
		$min = Module_Javascript::instance()->jsMinAppend();
		
		$this->addBowerJavascript("jquery/dist/jquery$min.js");
		$this->addBowerJavascript("jquery-modal/jquery.modal$min.js");
		$this->addBowerCSS("jquery-modal/jquery.modal$min.css");

		$this->addCSS('css/gdo-jquery.css');
		$this->addJavascript('js/gdo-jquery.js');
	}
}

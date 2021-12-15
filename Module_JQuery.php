<?php
namespace GDO\JQuery;

use GDO\Core\GDO_Module;
use GDO\Javascript\Module_Javascript;

/**
 * This module adds jquery to your application.
 * @TODO: Optional script included: jquery-color.
 * 
 * @author gizmore
 * @version 6.11.1
 * @since 6.0.0
 */
final class Module_JQuery extends GDO_Module
{
	public $module_priority = 5;
	
	public function onIncludeScripts()
	{
		$min = Module_Javascript::instance()->cfgMinAppend();
		
		$this->addBowerJS("jquery/dist/jquery$min.js");
		$this->addBowerJS("jquery-modal/jquery.modal$min.js");
		$this->addBowerCSS("jquery-modal/jquery.modal$min.css");

		$this->addCSS('css/gdo-jquery.css');
		$this->addJS('js/gdo-jquery.js');
		
		$this->addBowerJS("jquery-color/dist/jquery.color{$min}.js");
	}
	
	public function getModuleLicenseFilenames()
	{
	    return [
	        'bower_components/jquery/LICENSE.txt',
	        'LICENSE',
	    ];
	}

}

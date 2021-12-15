<?php
namespace GDO\JQuery;

use GDO\Core\GDO_Module;
use GDO\DB\GDT_Checkbox;
use GDO\Javascript\Module_Javascript;
use GDO\UI\GDT_Divider;

/**
 * This module adds jquery to your application.
 * 
 * Comes with a few tiny extensions which can be opt-outed.
 * 
 *  - jquery-modal for very basic alerts and confirms.
 *  - jquery-color for color based animations.
 *  - gdo-effects for some default animations.
 *  
 * @see [Module_Javascript](https://github.com/gizmore/gdo6)
 * @see [gdo6-jquery-autocomplete](https://github.com/gizmore/gdo6-jquery-autocomplete)
 *  
 * @author gizmore
 * @version 6.11.1
 * @since 6.0.0
 */
final class Module_JQuery extends GDO_Module
{
	public $module_priority = 5;
	
	##############
	### Config ###
	##############
	public function getConfig()
	{
		return [
			GDT_Divider::make('div_extensions'),
			GDT_Checkbox::make('jquery_modal')->initial('1'),
			GDT_Checkbox::make('jquery_color')->initial('1'),
			GDT_Checkbox::make('jquery_gdo6_effects')->initial('1'),
		];
	}
	
	public function cfgJqueryModal() { return $this->getConfigVar('jquery_modal'); }
	public function cfgJqueryColor() { return $this->getConfigVar('jquery_color'); }
	public function cfgGDOEffects() { return $this->getConfigVar('jquery_gdo6_effects'); }
	
	############
	### Boot ###
	############
	public function onIncludeScripts()
	{
		$min = Module_Javascript::instance()->cfgMinAppend();

		# jQuery core.
		$this->addBowerJS("jquery/dist/jquery$min.js");

		# jquery-color
		if ($this->cfgJqueryColor())
		{
			$this->addBowerJS("jquery-color/dist/jquery.color{$min}.js");
		}
		
		# jquery-modal
		if ($this->cfgJqueryModal())
		{
			$this->addBowerJS("jquery-modal/jquery.modal$min.js");
			$this->addBowerCSS("jquery-modal/jquery.modal$min.css");
		}

		# gdo6 jquery core integration scripts on top.
		$this->addJS('js/gdo-jquery.js');
		$this->addCSS('css/gdo-jquery.css');
		
		# gdo6 jquery effects
		if ($this->cfgGDOEffects())
		{
			$this->addJS('js/gdo-effects.js');
		}
	}
	
	public function getModuleLicenseFilenames()
	{
	    return [
	    	'bower_components/jquery/LICENSE.txt',
	    	'bower_components/jquery-modal/LICENSE.txt',
	    	'bower_components/jquery-color/LICENSE.txt',
	    	'LICENSE',
	    ];
	}

}

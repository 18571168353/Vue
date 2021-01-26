import $ from 'jquery'
$(function () {
	$('ul li:even').css('background', 'blue')
	$('ul li:odd').css('background', 'yellow')
})

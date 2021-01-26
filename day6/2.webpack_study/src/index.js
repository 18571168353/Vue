import $ from 'jquery'
import './css/1.css'
import './css/1.less'
import './css/1.scss'
$(function () {
	$('ul li:even').css('background', 'blue')
	$('ul li:odd').css('background', 'yellow')
})
 class Person{
     static info = 'aaa'
 }
 console.log(Person.info);
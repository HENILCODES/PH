$(document).ready(function(){
	$('#TableBT').hide();
	$('#TNum').click(function(){
		$('#TableBT').show();
		$('#Tableclear').hide();
		$('#Mtans').empty();
	})
	$('#Tableclear').click(function(){
		$('#Mtans').empty();
	})
	$('#Tableclear').hide();
	$('#TableBT').click(function(){
		$('#TableBT').hide(); 
		$('#Tableclear').show();
	})
	$('#Tableclear').click(function(){
		$('#TableBT').show();
		$('#Tableclear').hide();
	})
});
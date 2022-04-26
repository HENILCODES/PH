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
	
	$('select').change(function(){
		var opt = $(this).find(":selected").val();
		if(opt == "String Is equal or not")
		{
			$('.stringCheck').slideDown(1500);
			$('.calculate').hide(1500);
			$('.detail').hide(1500);
			$('.Table').hide(1500);
		}
		else if(opt == "Calculate Two Number")
		{
			$('.calculate').slideDown(1500);
			$('.stringCheck').hide(1500);
			$('.detail').hide(1500);
			$('.Table').hide(1500);
		}
		else if(opt == "Multiplication Table")
		{
			$('.Table').slideDown(1500);
			$('.calculate').hide(1500);
			$('.stringCheck').hide(1500);
			$('.detail').hide(1500);
		}
		else
		{
			$('.detail').show(1500);
			$('.calculate').hide(1500);
			$('.stringCheck').hide(1500);
			$('.Table').hide(1500);
		}
	});
});

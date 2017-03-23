$(function () {
	$('#daychart').highcharts().series[2].hide();
	$('#energychart').highcharts().series[1].hide();
})

function toggleGraph(){
	 if($('#graph1').is(":visible")){
		$('#graph1').hide('fast');
		$('#graph2').show();
	} else {
		$('#graph1').show();
		$('#graph2').hide('fast');
	}
}

function showGraph(event, graph){
	 if($(graph).is(":visible")){
		
	} else {
		$('#graph1').hide('fast');
		$('#graph2').hide('fast');
		$(graph).show('fast');
		if(graph == '#graph1'){
			$('#herston').show('fast');
			$('#gattonenergy').hide('fast');
		} else if (graph == '#graph2'){
			$('#herston').hide('fast');
			$('#gattonpower').hide('fast');
		}
	}
}
	
function changeGraph(event, type){
	if(type == 'power'){
		showGraph(event, '#graph1');
		$('#datatype').val("Power - Instantaneous");
		var chart = $('#daychart').highcharts();
		var series = chart.series[2];
		if (series.visible) {
			series.hide();
			$('#gattonpower').hide('fast');
			event.currentTarget.getElementsByClassName("bottominfo")[0].style.backgroundColor = "#905BA5";
			event.currentTarget.getElementsByClassName("bottominfo2")[0].style.backgroundColor = "#A471B0";
		} else {
			series.show();
			$('#gattonpower').show('fast');
			event.currentTarget.getElementsByClassName("bottominfo")[0].style.backgroundColor = "#49075E";
			event.currentTarget.getElementsByClassName("bottominfo2")[0].style.backgroundColor = "#6C307F";
		}
	} else if (type == 'energy'){
		showGraph(event, '#graph2');
		$('#datatype').val("Energy - Cumulative");
		var chart = $('#energychart').highcharts();
		var series = chart.series[1];
		if (series.visible) {
			series.hide();
			$('#gattonenergy').hide('fast');
			event.currentTarget.getElementsByClassName("bottominfo")[0].style.backgroundColor = "#905BA5";
			event.currentTarget.getElementsByClassName("bottominfo2")[0].style.backgroundColor = "#A471B0";
		} else {
			series.show();
			$('#gattonenergy').show('fast');
			event.currentTarget.getElementsByClassName("bottominfo")[0].style.backgroundColor = "#49075E";
			event.currentTarget.getElementsByClassName("bottominfo2")[0].style.backgroundColor = "#6C307F";
		}
	}
}

function showInfo(info, show) {
	$(info).show('fast');
	$(show).hide('fast');
}

function closeInfo(info, show) {
	$(info).hide('fast');
	$(show).show('fast');
}

function hideHerston() {
	$('#herston').hide('fast');
}
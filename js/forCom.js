function comit(message) {
	switch(message) {
		case 1:
			document.getElementById('mes1').style.display = "flex";
			document.getElementById('mes2').style.display = "none";
			document.getElementById('mes3').style.display = "none";
			break;
		case 2:
			document.getElementById('mes1').style.display = "none";
			document.getElementById('mes2').style.display = "flex";
			document.getElementById('mes3').style.display = "none";
			break;
		case 3:
			document.getElementById('mes1').style.display = "none";
			document.getElementById('mes2').style.display = "none";
			document.getElementById('mes3').style.display = "flex";
			break;
	}
}

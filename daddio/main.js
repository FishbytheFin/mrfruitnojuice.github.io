let slide_num = 1;
function next(){
	slide_num += 1;
	if (slide_num == 2) {
		document.getElementById('header0').innerHTML = "We Love you because you are the best"
	}
	if (slide_num == 3) {
		document.getElementById('header0').innerHTML = "We Love you because you support us"
	}
	if (slide_num == 4) {
		document.getElementById('header0').innerHTML = "We Love you because you care about us"
	}
	if (slide_num == 5) {
		document.getElementById('header0').innerHTML = "We Love you because you invest in us"
	}
	if (slide_num == 6) {
		document.getElementById('header0').innerHTML = "And we Love you because you love us!"
	}
	if (slide_num == 7) {
		document.getElementById('header0').innerHTML = ""
		document.getElementById('heart_img').setAttribute("src", "images/giphy (2).gif")
	}
}
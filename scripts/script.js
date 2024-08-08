"use strict";
const userObj={};
window.onload = () => {

	let header_text = document.querySelector(".header-desc");
	let screen_count = document.querySelector(".screen-count");
	let main = document.querySelector("main");
	let nextBtn = document.querySelector("#next-btn");
	let prevBtn = document.querySelector("#prev-btn");

	let counter = 0;
	
	function controls(){
		let cards = document.querySelectorAll('.card');
	cards.forEach((card, index) => {
		card.onclick = function () {
			if(this.parentElement.querySelector('.active')){
				this.parentElement.querySelector('.active').classList.remove('active');
			}
			
			this.classList.toggle("active");
			if(Object.keys(userObj).length >0 ){
				userObj[card.parentElement.parentElement.querySelectorAll('h2 em')[0].innerText]=card.querySelector('h3').innerText+' '+card.querySelector('p').innerText;
			}else{
				userObj.card=card.querySelector('p').innerText;
			}
			
			// alert(Object.keys(userObj));
			let profile=this.querySelector(".profile");
			if(profile.innerText.indexOf("+") !== -1 ){
				//alert("need more func");
				let defaultValue=profile.innerText.slice(0,1);
				 
				profile.innerHTML +=`<section class="counter">
				<input type="button" class="minus" value="-" >
				<input type="button" class="add" value="+" ></section>`
				function IncreDecre(n){
					
					console.log(n)
					if(n >= 3){
						profile.innerText= n+"+";
				}else{
					profile.innerText= defaultValue+"+";	
				}
				index=n;
			}
			document.querySelectorAll(".counter input").forEach((e)=>{
				e.onclick=function(){
					this.value === "+" ? IncreDecre(index + 1): IncreDecre(index - 1);
				}
			})
		}else{
			cards.forEach((e)=>{
					if(e.querySelector(".profile").querySelector(".counter")){
						e.querySelector(".profile").removeChild(document.querySelector(".counter"));
				}else return;
			});
		}
		}
		
	})
	}
	function gotoScreen(index) {

		header_text.innerText = PageDb()[index].header_desc;

		screen_count.innerText = `${index + 1}/${PageDb().length}`;

		main.innerHTML = PageDb()[index].screen;
		if (counter == 0) {
			prevBtn.style.display = "none";
		} else {
			prevBtn.style.display = "block";
		}

		let slide_counter = document.querySelector("#slide-counter");
		if (slide_counter) {
			let range_slider = document.querySelector(".slider");
			slide_counter.innerText = "$" + range_slider.value;

			range_slider.oninput = function () {
				slide_counter.innerText = "$" + this.value;
			}

		}
		controls();
	}
	
	nextBtn.onclick = () => {
		nextScreen();
	}
	prevBtn.onclick = () => {
		prevScreen();
	}
	function nextScreen() {
		counter = [counter + 1] % PageDb().length;
		gotoScreen(counter)
	}
	function prevScreen() {
		counter = [counter - 1] % PageDb().length;
		gotoScreen(counter)
	}


	gotoScreen(counter);



	try{
		fetch('./UserChoices', {
			method: 'POST',
			headers:{'content-Type': 'application/json'},
			body: JSON.stringify(userChoice)
		})
	}catch(err){
		console.log(err);
	}
}
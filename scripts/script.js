"use strict";

window.onload = () => {	
	const body=document.querySelector('body');
	const header_text = document.querySelector(".header-desc");
	const screen_count = document.querySelector(".screen-count");
	const main = document.querySelector("main");
	const nextBtn = document.querySelector("#next-btn");
	const prevBtn = document.querySelector("#prev-btn");

	let pageCounter = 0;
	let userObj = {};
	function displayHouseInfo(data){
		let display=document.querySelector('.info-list');
		display.innerHTML =`
		${Object.keys(data).map(key=>{
			return `<li>${key}: <b>${userObj[key].split(" ").length > 1 && !userObj[key].split(" ")[0].match(/[\d]|\$/g) ? userObj[key].split(" ")[1]: userObj[key]}</b></li>`;
		})
			}`;
	
	
}
	function controls() {
		let cards = document.querySelectorAll('.card');
		cards.forEach((card, index) => {
			card.onclick = function () {
				if (this.parentElement.querySelector('.active')) {
					this.parentElement.querySelector('.active').classList.remove('active');
				}

				this.classList.toggle("active");
				if (pageCounter === 1) {
					userObj[this.parentElement.previousElementSibling.querySelector('em').innerText] = this.querySelector('h3').innerText + ' ' + this.querySelector('p').innerText;
					displayHouseInfo(userObj);
				} else {
					userObj[PageDb()[pageCounter].header_desc] = this.querySelector('h3').innerText + ' ' + this.querySelector('p').innerText;
					displayHouseInfo(userObj);
				}

				// alert(Object.keys(userObj));
				console.log(userObj)
				let profile = this.querySelector(".profile") !== -1? this.querySelector(".profile"): null;
				if (profile !== null && profile.innerText.indexOf("+") !== -1) {
					let defaultValue = profile.innerText.slice(0, 1);
					profile.innerHTML += `<section class="counter">
				<input type="button" class="minus" value="-" >
				<input type="button" class="add" value="+" ></section>`
					function IncreDecre(n, operation) {
						
							if(operation === "+"){
								n+=1
							profile.innerText =  n + "+";
							index=n;
							
						}else if(operation === "-" && n >3){
							n-=1
							profile.innerText =  n + "+";
							index=n;
						}
					}
					document.querySelectorAll(".counter input").forEach((e) => {
						e.onclick = function () {
							IncreDecre(index, this.value) 
						}
					})
				} else {
					cards.forEach((e) => {
						if (e.querySelector(".profile").querySelector(".counter") !== -1) {
							e.querySelector(".profile").removeChild(document.querySelector(".counter"));
						} else { return };
					});
				}

				
			}

		})
	}
	
	function gotoScreen(index) {

		header_text.innerText = PageDb()[index].header_desc;

		screen_count.innerText = `${index + 1}/${PageDb().length}`;

		main.innerHTML = PageDb()[index].screen;
		if (pageCounter == 0) {
			prevBtn.style.display = "none";
		} else if (pageCounter == 3) {
			nextBtn.innerText = "Submit"
		} else {
			prevBtn.style.display = "block";
			nextBtn.innerText = "Next"
		}

		let slide_counter = document.querySelector("#slide-counter");
		let move_in_date = document.querySelector("#move-in-date");
		if(move_in_date != null){
			move_in_date.onchange=function(){
				!this.className.match("active")&&this.classList.add("active");
				userObj[PageDb()[pageCounter].header_desc]= this.value;
			}
		} 
		if (slide_counter !== null) {
			let range_slider = document.querySelector(".slider");
			slide_counter.innerText = "$" + range_slider.value;
			
			range_slider.oninput = function () {
				!this.className.match("active")&&this.classList.add("active");
				slide_counter.innerText = "$" + this.value;
				userObj[PageDb()[pageCounter].header_desc]= "$ " + this.value;
				 displayHouseInfo(userObj);
			}
			range_slider.onchange = function () {
				slide_counter.innerText = "$" + this.value;
				userObj[PageDb()[pageCounter].header_desc]= "$ " + this.value;
				
			}
			

		}
		controls();
		displayHouseInfo(userObj);
	}

	nextBtn.onclick = (e) => {
		validate() ? nextScreen(e.target): alert("Make a selection");
	}
	prevBtn.onclick = () => {
		prevScreen();
	}
	function nextScreen(elem) {
		if (elem.innerText.toLowerCase() === "submit") {
			console.log(userObj);
			let container=document.querySelector('.container');
			let agent=document.querySelector('.agent');
			agent.classList.add('visible');
			container.classList.add('overflow');

			
		}
		(pageCounter < 3) ? pageCounter += 1 : null;
		gotoScreen(pageCounter);
		displayHouseInfo(userObj);
		
	}
	function prevScreen() {
		pageCounter = [pageCounter - 1] % PageDb().length;
		gotoScreen(pageCounter)
	}


	gotoScreen(pageCounter);

	
	function validate() {
		let checks = document.querySelectorAll('.check');
		const hasActive=Array.prototype.some.call(checks, check=> check.querySelector('.active') != null);
		return hasActive;
	}
	
}
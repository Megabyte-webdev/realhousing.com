function PageDb(){
  return [{
	header_desc: "Reference Type",
	screen: ` <h2>Are You Looking For A <em>Home</em> Or An <em>Apartment</em>?</h2>

	<div id="cards">
	<div class="card">
	<h3 class="profile">H</h3>
	<p>Home</p>
	</div>
	<div class="card">
	<h3 class="profile">A</h3>
	<p>Apartment</p>
	</div>
	</div>`
}, {
	header_desc: "Bedrooms & bathrooms",
	screen: `
	<h2>How many <em>bedrooms</em> would you like?</h2>

	<div id="cards">
	<div class="card">
	<h3 class="profile">S</h3>
	<p>studio</p>
	</div>
	<div class="card">
	<h3 class="profile">1</h3>
	<p>Bed</p>
	</div>
	<div class="card">
	<h3 class="profile">2</h3>
	<p>Beds</p>
	</div>
	<div class="card">
	<h3 class="profile">3+</h3>
	<p>Beds</p>
	</div>
	</div>
	<h2>How many <em>bathrooms</em>?</h2>
	<div id="flat-cards">

	<div class="card">
	<p>1 Bathroom</p>
	</div>
	<div class="card">
	<p>2 Bathrooms</p>
	</div>
	<div class="card">

	<p>3 Bathrooms</p>

	</div>
	</div>`
}, {
	header_desc: "Budget Range",
	screen: ` <h2>What is your budget</h2>
	<div id="range-slider">
	<span>$1000</span>
	<span id="slide-counter">$10000</span>
	<input type="range" name="budget" class="slider" min="1000" max="10000" value="5000">

	</div>`
}, {
	header_desc: "Ideal move date",
	screen: ` <h2>When would you like to move in?</h2>
	<div id="calender">
<input type="datetime-local"
               id="Test_DatetimeLocal"
               min="2024-01-01T00:00" onload="this.value=new Date()" 
               value="2024-01-01T00:00" 
               step="1">
	</div>`
}];
}

window.PageDb=PageDb;
import React, { Component } from 'react';
import MapShowRestaurants from './MapShowRestaurants';
import PropertySearch from './PropertySearch';

export default class Property extends Component {
    render() {
        return (
            <div>

<div className="header">
<h2> Property Search!</h2>

<div id="comment">
	Search through our list of properties. View the details to learn more about one that interests you!
</div>
			<PropertySearch />
			<MapShowRestaurants />
</div>





{/* Start of 1st Property */}
<div style= { { backgroundColor: 'white', padding: '10px' } } id="listing-bin" className="row">

	<div style= { { paddingTop: '15px' } } id="listing" className="col-md-4">

		{/* <img style=" display: block; margin: auto; width: 80%;   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);" 
		src="http://www.adeptstudios.com/images/real-estate-photography-fort-lauderdale/real-estate-photography-fort-lauderdale-0023.jpg">  */}

		<div style= { { width: '220px', display: 'block', margin: 'auto', width: '100%',  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' } } className="w3-content w3-display-container">
			<img className="mySlides" src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/20664569_10159233973105397_8131932104020616398_n.jpg?oh=b671a890a2c355b0dbc3bda988d1b3f4&oe=59EF537A" style= { { width: '100%' } }/>
			<img className="mySlides" src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/20770288_10159233963145397_3756501036429277570_n.jpg?oh=fd21373ed48be921bdcdcaee4126ce22&oe=59EFD2ED" style= { { width: '100%' } }/>
			<img className="mySlides" src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/20664813_10159233963140397_3185855072053004134_n.jpg?oh=2a1bf89f63c021034725141f8b4407f1&oe=5A32E164" style= { { width: '100%' } }/>
			<img className="mySlides" src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/20728279_10159233963245397_6375633952423366008_n.jpg?oh=2b1552be59db3a904e8c4a2ab85822c1&oe=5A28ABBE" style= { { width: '100%' } }/>
			<img className="mySlides" src="https://scontent-dft4-1.xx.fbcdn.net/v/t31.0-8/20689907_10159233963255397_6662457968072453830_o.jpg?oh=a930616fedb1230cbb4bb0cc367987ff&oe=59F00437" style= { { width: '100%' } }/>

			<button className="w3-button w3-black w3-display-left" onclick="plusDivs1(-1)">&#10094;</button>
			<button style= { { float: 'right' } } className="w3-button w3-black w3-display-right" onclick="plusDivs1(1)">&#10095;</button>
		</div>

			{/* <script>
			var slideIndex = 1;
			showDivs1(slideIndex);

			function plusDivs1(n) {
			showDivs1(slideIndex += n);
			}

			function showDivs1(n) {
			var i;
			var x = document.getElementsByClassName("mySlides");
			if (n > x.length) {slideIndex = 1}    
			if (n < 1) {slideIndex = x.length}
			for (i = 0; i < x.length; i++) {
				x[i].style.display = "none";  
			}
			x[slideIndex-1].style.display = "block";  
			}
			</script> */}

	</div>
	<br/>

	<div className="col-md-4">
		<h4 style= { {  fontWeight: 'bold' } }>Address</h4>
		<p> 2215 Town Lake Circle Apt 142</p>
		<p> Austin, TX 78741</p>
		<span className="glyphicon glyphicon-signal" aria-hidden="true"></span>
		<span className="glyphicon glyphicon-home" aria-hidden="true"></span>
		<span className="glyphicon glyphicon-glass" aria-hidden="true"></span>
		<span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
		<hr/>
		<p>Phone |  254-324-9775</p>
		<p>Email |  kodus@gmail.com</p>
	</div>

		<div className="col-md-4">
		<h4 style= { { fontWeight: 'bold' } }>Price: $1,200 - $1,500</h4>
		<p> USD / Month </p>
		<h4>Beds: 4 |  Bath: 4</h4>
		
		<a href="/users/details"><button type="button" class="button button1">
  			<span className="glyphicon glyphicon-search" aria-hidden="true"></span> View Details
		</button></a>
	</div>
</div>
<br/>
{/* End of 1st Property Post */}







{/* Start of 2nd Proptery Post */}
<div style= { { backgroundColor: 'white', padding: '10px' } } id="listing-bin" className="row">

	<div style= { { paddingTop: '15px' } } id="listing" className="col-md-4">

		{/* <img style=" display: block; margin: auto; width: 80%;   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);" 
		src="http://www.adeptstudios.com/images/real-estate-photography-fort-lauderdale/real-estate-photography-fort-lauderdale-0023.jpg"> */}

		<div style= { { width: '220px',  display: 'block', margin: 'auto', width: '100%',  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' } } className="w3-content w3-display-container">
			<img class="mySlides2" src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/20664569_10159233973105397_8131932104020616398_n.jpg?oh=b671a890a2c355b0dbc3bda988d1b3f4&oe=59EF537A" style= { { width: '100%' } }/>
			<img class="mySlides2" src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/20770288_10159233963145397_3756501036429277570_n.jpg?oh=fd21373ed48be921bdcdcaee4126ce22&oe=59EFD2ED" style= { { width: '100%' } }/>
			<img class="mySlides2" src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/20664813_10159233963140397_3185855072053004134_n.jpg?oh=2a1bf89f63c021034725141f8b4407f1&oe=5A32E164" style= { { width: '100%' } }/>
			<img class="mySlides2" src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/20728279_10159233963245397_6375633952423366008_n.jpg?oh=2b1552be59db3a904e8c4a2ab85822c1&oe=5A28ABBE" style= { { width: '100%' } }/>
			<img class="mySlides2" src="https://scontent-dft4-1.xx.fbcdn.net/v/t31.0-8/20689907_10159233963255397_6662457968072453830_o.jpg?oh=a930616fedb1230cbb4bb0cc367987ff&oe=59F00437" style= { { width: '100%' } }/>

			<button className="w3-button w3-black w3-display-left" onclick="plusDivs2(-1)">&#10094;</button>
			<button style= { { float: 'right' } } className="w3-button w3-black w3-display-right" onclick="plusDivs2(1)">&#10095;</button>
		</div>

			{/* <script>
			var slideIndex = 1;
			showDivs2(slideIndex);

			function plusDivs2(n) {
			showDivs2(slideIndex += n);
			}

			function showDivs2(n) {
			var i;
			var x = document.getElementsByClassName("mySlides2");
			if (n > x.length) {slideIndex = 1}    
			if (n < 1) {slideIndex = x.length}
			for (i = 0; i < x.length; i++) {
				x[i].style.display = "none";  
			}
			x[slideIndex-1].style.display = "block";  
			}
			</script> */}
	</div>
	<br/>

	<div className="col-md-4">
		<h4 style= { { fontWeight: 'bold' } }>Address</h4>
		<p> 2215 Town Lake Circle Apt 142</p>
		<p> Austin, TX 78741</p>
		<span className="glyphicon glyphicon-signal" aria-hidden="true"></span>
		<span className="glyphicon glyphicon-home" aria-hidden="true"></span>
		<span className="glyphicon glyphicon-glass" aria-hidden="true"></span>
		<span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
		<hr/>
		<p>Phone |  254-324-9775</p>
		<p>Email |  kodus@gmail.com</p>
	</div>

		<div className="col-md-4">
		<h4 style= { { fontWeight: 'bold' } }>Price: $1,200 - $1,500</h4>
		<p> USD / Month </p>
		<h4>Beds: 4 |  Bath: 4</h4>
		
		<a href="/users/details"><button type="button" class="button button1">
  			<span className="glyphicon glyphicon-search" aria-hidden="true"></span> View Details
		</button></a>
	</div>
</div>
<br/>
{/* End of 2nd Property Post */}








{/* Start of 3rd Property Post */}
<div style= { { backgroundColor: 'white', padding: '10px' } } id="listing-bin" className="row">

	<div style= { { paddingTop: '15px' } } id="listing" className="col-md-4">

		{/* <img style=" display: block; margin: auto; width: 80%;   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);" 
		src="http://www.adeptstudios.com/images/real-estate-photography-fort-lauderdale/real-estate-photography-fort-lauderdale-0023.jpg"> */}

		<div style= { { width: '220px',  display: 'block', margin: 'auto', width: '100%',  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' } } className="w3-content w3-display-container">
			<img className="mySlides3" src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/20664569_10159233973105397_8131932104020616398_n.jpg?oh=b671a890a2c355b0dbc3bda988d1b3f4&oe=59EF537A" style= { { width: '100%' } }/>
			<img className="mySlides3" src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/20770288_10159233963145397_3756501036429277570_n.jpg?oh=fd21373ed48be921bdcdcaee4126ce22&oe=59EFD2ED" style= { { width: '100%' } }/>
			<img className="mySlides3" src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/20664813_10159233963140397_3185855072053004134_n.jpg?oh=2a1bf89f63c021034725141f8b4407f1&oe=5A32E164" style= { { width: '100%' } }/>
			<img className="mySlides3" src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/20728279_10159233963245397_6375633952423366008_n.jpg?oh=2b1552be59db3a904e8c4a2ab85822c1&oe=5A28ABBE" style= { { width: '100%' } }/>
			<img className="mySlides3" src="https://scontent-dft4-1.xx.fbcdn.net/v/t31.0-8/20689907_10159233963255397_6662457968072453830_o.jpg?oh=a930616fedb1230cbb4bb0cc367987ff&oe=59F00437" style= { { width: '100%' } }/>

			<button className="w3-button w3-black w3-display-left" onclick="plusDivs3(-1)">&#10094;</button>
			<button style= { { float: 'right' } }  className="w3-button w3-black w3-display-right" onclick="plusDivs3(1)">&#10095;</button>
		</div>

			{/* <script>
			var slideIndex = 1;
			showDivs3(slideIndex);

			function plusDivs3(n) {
			showDivs3(slideIndex += n);
			}

			function showDivs3(n) {
			var i;
			var x = document.getElementsByClassName("mySlides3");
			if (n > x.length) {slideIndex = 1}    
			if (n < 1) {slideIndex = x.length}
			for (i = 0; i < x.length; i++) {
				x[i].style.display = "none";  
			}
			x[slideIndex-1].style.display = "block";  
			}
			</script> */}

	</div>
	<br/>

	<div className="col-md-4">
		<h4 style= { { fontWeight: 'bold' } }>Address</h4>
		<p> 2215 Town Lake Circle Apt 142</p>
		<p> Austin, TX 78741</p>
		<span className="glyphicon glyphicon-signal" aria-hidden="true"></span>
		<span className="glyphicon glyphicon-home" aria-hidden="true"></span>
		<span className="glyphicon glyphicon-glass" aria-hidden="true"></span>
		<span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
		<hr/>
		<p>Phone |  254-324-9775</p>
		<p>Email |  kodus@gmail.com</p>
	</div>

		<div className="col-md-4">
		<h4 style={ { fontWeight: 'bold' } }>Price: $1,200 - $1,500</h4>
		<p> USD / Month </p>
		<h4>Beds: 4 |  Bath: 4</h4>
		
		<a href="/users/details"><button type="button" className="button button1">
  			<span className="glyphicon glyphicon-search" aria-hidden="true"></span> View Details
		</button></a>
	</div>
</div>
<br/>
{/* End of 3rd Property Post */}









{/* Start of 4th Property Post */}
<div style= { { backgroundColor: 'white', padding: '10px' } } id="listing-bin" className="row">

	<div style= { { paddingTop: '15px' } } id="listing" className="col-md-4">

		{/* <img style=" display: block; margin: auto; width: 80%;   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);" 
		src="http://www.adeptstudios.com/images/real-estate-photography-fort-lauderdale/real-estate-photography-fort-lauderdale-0023.jpg"> */}

		<div style= { { width: '220px',  display: 'block', margin: 'auto', width: '100%', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' } } className="w3-content w3-display-container">
			<img className="mySlides4" src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/20664569_10159233973105397_8131932104020616398_n.jpg?oh=b671a890a2c355b0dbc3bda988d1b3f4&oe=59EF537A" style= { { width: '100%' } }/>
			<img className="mySlides4" src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/20770288_10159233963145397_3756501036429277570_n.jpg?oh=fd21373ed48be921bdcdcaee4126ce22&oe=59EFD2ED" style= { { width: '100%' } }/>
			<img className="mySlides4" src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/20664813_10159233963140397_3185855072053004134_n.jpg?oh=2a1bf89f63c021034725141f8b4407f1&oe=5A32E164" style= { { width: '100%' } }/>
			<img className="mySlides4" src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/20728279_10159233963245397_6375633952423366008_n.jpg?oh=2b1552be59db3a904e8c4a2ab85822c1&oe=5A28ABBE" style= { { width: '100%' } }/>
			<img className="mySlides4" src="https://scontent-dft4-1.xx.fbcdn.net/v/t31.0-8/20689907_10159233963255397_6662457968072453830_o.jpg?oh=a930616fedb1230cbb4bb0cc367987ff&oe=59F00437" style= { { width: '100%' } }/>

			<button className="w3-button w3-black w3-display-left" onclick="plusDivs4(-1)">&#10094;</button>
			<button style= { { float: 'right' } } className="w3-button w3-black w3-display-right" onclick="plusDivs4(1)">&#10095;</button>
		</div>

			{/* <script>
			var slideIndex = 1;
			showDivs4(slideIndex);

			function plusDivs4(n) {
			showDivs4(slideIndex += n);
			}

			function showDivs4(n) {
			var i;
			var x = document.getElementsByClassName("mySlides4");
			if (n > x.length) {slideIndex = 1}    
			if (n < 1) {slideIndex = x.length}
			for (i = 0; i < x.length; i++) {
				x[i].style.display = "none";  
			}
			x[slideIndex-1].style.display = "block";  
			}
			</script> */}

	</div>
	<br/>

	<div className="col-md-4">
		<h4 style= { { fontWeight: 'bold' } }>Address</h4>
		<p> 2215 Town Lake Circle Apt 142</p>
		<p> Austin, TX 78741</p>
		<span className="glyphicon glyphicon-signal" aria-hidden="true"></span>
		<span className="glyphicon glyphicon-home" aria-hidden="true"></span>
		<span className="glyphicon glyphicon-glass" aria-hidden="true"></span>
		<span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
		<hr/>
		<p>Phone |  254-324-9775</p>
		<p>Email |  kodus@gmail.com</p>
	</div>

		<div className="col-md-4">
		<h4 style= { { fontWeight: 'bold' } } >Price: $1,200 - $1,500</h4>
		<p> USD / Month </p>
		<h4>Beds: 4 |  Bath: 4</h4>
		
		<a href="/users/details"><button type="button" className="button button1">
  			<span className="glyphicon glyphicon-search" aria-hidden="true"></span> View Details
		</button></a>
	</div>
</div>
<br/>

{/* End of 4th Property Post */}







{/* Start of 5th Property Post */}
<div style= { { backgroundColor: 'white', padding: '10px' } }  id="listing-bin" className="row">

	<div style= { { paddingTop: '15px' } } id="listing" className="col-md-4">

		{/* <img style=" display: block; margin: auto; width: 80%;   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);" 
		src="http://www.adeptstudios.com/images/real-estate-photography-fort-lauderdale/real-estate-photography-fort-lauderdale-0023.jpg"> */}

		<div style= { { width: '220px',  display: 'block', margin: 'auto', width: '100%', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' } } className="w3-content w3-display-container">
			<img className="mySlides5" src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/20664569_10159233973105397_8131932104020616398_n.jpg?oh=b671a890a2c355b0dbc3bda988d1b3f4&oe=59EF537A" style= { { width: '100%' } }/>
			<img className="mySlides5" src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/20770288_10159233963145397_3756501036429277570_n.jpg?oh=fd21373ed48be921bdcdcaee4126ce22&oe=59EFD2ED" style= { { width: '100%' } }/>
			<img className="mySlides5" src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/20664813_10159233963140397_3185855072053004134_n.jpg?oh=2a1bf89f63c021034725141f8b4407f1&oe=5A32E164" style= { { width: '100%' } }/>
			<img className="mySlides5" src="https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/20728279_10159233963245397_6375633952423366008_n.jpg?oh=2b1552be59db3a904e8c4a2ab85822c1&oe=5A28ABBE" style= { { width: '100%' } }/>
			<img className="mySlides5" src="https://scontent-dft4-1.xx.fbcdn.net/v/t31.0-8/20689907_10159233963255397_6662457968072453830_o.jpg?oh=a930616fedb1230cbb4bb0cc367987ff&oe=59F00437" style= { { width: '100%' } }/>
			<button className="w3-button w3-black w3-display-left" onclick="plusDivs5(-1)">&#10094;</button>
			<button style= { { float: 'right' } } className="w3-button w3-black w3-display-right" onclick="plusDivs5(1)">&#10095;</button>
		</div>

			{/* <script>
			var slideIndex = 1;
			showDivs5(slideIndex);

			function plusDivs5(n) {
			showDivs5(slideIndex += n);
			}

			function showDivs5(n) {
			var i;
			var x = document.getElementsByClassName("mySlides5");
			if (n > x.length) {slideIndex = 1}    
			if (n < 1) {slideIndex = x.length}
			for (i = 0; i < x.length; i++) {
				x[i].style.display = "none";  
			}
			x[slideIndex-1].style.display = "block";  
			}
			</script> */}

	</div>
	<br/>

	<div className="col-md-4">
		<h4 style= { { fontWeight: 'bold' } }>Address</h4>
		<p> 2215 Town Lake Circle Apt 142</p>
		<p> Austin, TX 78741</p>
		<span className="glyphicon glyphicon-signal" aria-hidden="true"></span>
		<span className="glyphicon glyphicon-home" aria-hidden="true"></span>
		<span className="glyphicon glyphicon-glass" aria-hidden="true"></span>
		<span className="glyphicon glyphicon-tree-conifer" aria-hidden="true"></span>
		<hr/>
		<p>Phone |  254-324-9775</p>
		<p>Email |  kodus@gmail.com</p>
	</div>

		<div className="col-md-4">
		<h4 style= { { fontWeight: 'bold' } }>Price: $1,200 - $1,500</h4>
		<p> USD / Month </p>
		<h4>Beds: 4 |  Bath: 4</h4>
		
		<a href="/users/details"><button type="button" className="button button1">
  			<span className="glyphicon glyphicon-search" aria-hidden="true"></span> View Details
		</button></a>
	</div>
</div>
<br/>
{/* End of 5th Property Post */}

            </div>
        );
    }
}
const { render } = ReactDOM

//render = createElement/jsx dom, where to inject 
render(
	<h1 id='title'
		className='header'
		//inline style in jsx (using jsx you might encourter browser error - so use babel)
		style={{backgroundColor: 'orange', color: 'white', fontFamily: 'verdana'}}>
	Hello World	
	</h1>,
	document.getElementById('react-container')
)
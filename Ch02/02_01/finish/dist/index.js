//React.createElement 
const { createElement } = React
//ReactDOM.render
const { render } = ReactDOM

const style = { 
	backgroundColor: 'orange',
	color: 'white',
	fontFamily: 'verdana'
}
//createElement = html element, properties, content
const title = createElement(
	'h1',
	{id: 'title', className: 'header', style: style},
	'Hello World'
)
//render = dom/element, placetoinject
render(
	title,
	document.getElementById('react-container')
)
//npm install -g httpster 
//httpster -d ./finish/dist -p 3000
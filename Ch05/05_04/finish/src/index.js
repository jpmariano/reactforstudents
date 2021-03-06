import React from 'react'
import { render } from 'react-dom'
import './stylesheets/ui.scss'
import { App } from './components/App'
import { Whoops404 } from './components/Whoops404'
import { Router, Route, hashHistory } from 'react-router'

window.React = React

render(
	<Router history={hashHistory}>
		<Route path="/" component={App}/> {/*inside App.js this.props.location.pathname === "/"*/}
		<Route path="list-days" component={App}>
			<Route path=":filter" component={App} /> {/*This will listen to the url path and calls the App*/}
		</Route>
		<Route path="add-day" component={App} /> {/*inside App.js this.props.location.pathname === "/add-day"*/}
		<Route path="*" component={Whoops404}/>
	</Router>,
	document.getElementById('react-container')
)


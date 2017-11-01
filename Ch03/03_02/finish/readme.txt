1. SkiDayCount.js
import React from 'react'
import '../stylesheets/ui.scss'

window.React = React //make sure react is loaded
export const SkiDayCount = React.createClass({ //older way to create a react class 
	render() {
		return (
			<div className="ski-day-count">
				<div className="total-days">
					<span>5 days</span>
				</div>
				<div className="powder-days">
					<span>2 days</span>
				</div>
				<div className="backcountry-days">
					<span>1 hiking day</span>
				</div>
			</div>
		)
	}
})

2. index.js 
import React from 'react'
import { render } from 'react-dom'
import { SkiDayCount } from './components/SkiDayCount'

window.React = React

render(
	<SkiDayCount />,
	document.getElementById('react-container')
)


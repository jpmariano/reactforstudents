Create a component using class 

Creating stateless functional components 
- return jsx 
- cant access this 
- local method needs to be removed 
- remove render method and return 
    - uses arrow function 
- No need component from react 
    - React suggested to use this 


import '../stylesheets/ui.scss'

//- local method needs to be removed 
const percentToDecimal = (decimal) => {
	return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
	return percentToDecimal(total/goal)
}


export const SkiDayCount = ({total, powder, backcountry, goal}) => (
		<div className="ski-day-count">
			<div className="total-days">
				<span>{total}</span>
				<span>days</span>
			</div>
			<div className="powder-days">
				<span>{powder}</span>
				<span>days</span>
			</div>
			<div className="backcountry-days">
				<span>{backcountry}</span>
				<span>days</span>
			</div>
			<div>
				<span>
					{calcGoalProgress(
						total, 
						goal
					)}
				</span>
			</div>
		</div>
)

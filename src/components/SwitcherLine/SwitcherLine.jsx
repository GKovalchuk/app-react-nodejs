import './SwitcherLine.css'
import React from 'react';
import cn from 'classnames';

const SwitcherLine = ({
	buttonList = [],
	selected,
	switchTabs,
	classes = []
}) => {

	const buildButtons = () => {
		return buttonList.map(({ text, link }) => {

			return (
				<button
					key={text}
					type='button'
					onClick={() => { switchTabs({ text, link }) }}
					className={cn('switcher-line_button', [...classes], {
						'switcher-line_selected': text === selected.text
					})}
				>
					{text}
				</button>
			);
		});
	}

	return (
		<div className="switcher-line_wrapper">
			{buildButtons()}
		</div>
	);
}

export default SwitcherLine;
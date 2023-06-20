import React from 'react';
import './styles.scss';

const QuickReplySuggestions = ({ suggestions, onClick }) => {
	return (
		<div className="quick-reply-wrapper">
			{suggestions && suggestions.map((suggestion, index) => (
				<div
					className="quick-reply-suggestion this-is-it"
					key={index}
					onClick={() => onClick(suggestion.text)}
				>
					{suggestion.text}
				</div>
			))}
		</div>
	);
};

export default QuickReplySuggestions;
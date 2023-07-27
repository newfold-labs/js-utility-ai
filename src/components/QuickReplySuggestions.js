import '@wordpress/element';
import './styles.scss';

const QuickReplySuggestions = ({ suggestions, onClick }) => {
	return (
		<div className="quick-reply-wrapper">
			{suggestions && suggestions.map((suggestion, index) => (
				<div
					className="quick-reply-suggestion"
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
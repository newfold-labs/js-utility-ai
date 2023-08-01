import '@wordpress/element';
import { QuickReplyWrapper, QuickReplySuggestion } from './styles';

const QuickReplySuggestions = ({ suggestions, onClick }) => {
	return (
		<QuickReplyWrapper>
			{suggestions && suggestions.map((suggestion, index) => (
				<QuickReplySuggestion
					key={index}
					onClick={() => onClick(suggestion.text)}
				>
					{suggestion.text}
				</QuickReplySuggestion>
			))}
		</QuickReplyWrapper>
	);
};

export default QuickReplySuggestions;
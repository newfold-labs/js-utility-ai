import { useState, useEffect } from '@wordpress/element';
import moduleAI from '../../lib/moduleAI';
import QuickReplySuggestions from './QuickReplySuggestions';
import { SuggestionButton } from './styles';

function DescriptionGenerator({ siteDesc, siteTitle, siteType, siteSubtype, siteUrl, handleSuggestionClick }) {
  const [suggestionButton, setSuggestionButton] = useState(false);
  const [btnText, setBtnText] = useState('Show Suggestions');
  const [aiResults, setAIResults] = useState([]);
  useEffect(() => {
    if (siteDesc) {
      setSuggestionButton(true);
    }
    return () => {
    };
  }, [siteDesc]);
  const getAIResult = async () => {
    if (siteDesc && siteTitle) {
      const userPrompt = `current description is ${siteDesc} site title is ${siteTitle} site type is ${siteType} sub type is ${siteSubtype} site url is ${siteUrl}`;
      try {
        setBtnText("Fetching Suggestions...");
        const result = await moduleAI.search.getSearchResult(
          userPrompt,
          'descgenerator'
        );
        setAIResults(result.result);
      } catch (exception) {
        setBtnText("Show Suggestions");
      } finally {
        setBtnText("Show Suggestions");
      }
    }
  };
  return (
    <div>
      <SuggestionButton
        onClick={(event) => { event.preventDefault(); getAIResult(); }}
      >
        {btnText}
      </SuggestionButton>
      <QuickReplySuggestions
        suggestions={aiResults}
        onClick={handleSuggestionClick}
      />
    </div>
  );
}
export default DescriptionGenerator;
import { useState, useEffect } from '@wordpress/element';
import moduleAI from '../../lib/moduleAI';
import QuickReplySuggestions from './QuickReplySuggestions';
import { SuggestionButton } from './styles';

function DescriptionGenerator({ 
  siteDesc,
  siteTitle,
  siteType,
  siteSubtype,
  siteUrl,
  targetElementSelector
}) {
  
  const [btnText, setBtnText] = useState('Show Suggestions');
  const [aiResults, setAIResults] = useState([]);
  const [targetHasValue, setTargetHasValue] = useState(false); // New state variable
  
  useEffect(() => {
    const targetElement = document.querySelector(targetElementSelector);
    if (targetElement && targetElement.value) {
      setTargetHasValue(true);
    } else {
      setTargetHasValue(false);
    }
   // listening to input changes on the elements
    const handleInputChange = () => {
      setTargetHasValue(!!targetElement.value);
    };
    targetElement?.addEventListener('input', handleInputChange);
    return () => {
      targetElement?.removeEventListener('input', handleInputChange);
    };
  }, [targetElementSelector]);
  
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

  const handleSuggestionClick = (suggestion) => {
    const targetElement = document.querySelector(targetElementSelector);
    if (targetElement) {
      targetElement.value = suggestion;
    }
  };

  return (
    <div>
      {targetHasValue && (
        <SuggestionButton
          onClick={(event) => { event.preventDefault(); getAIResult(); }}
        >
          {btnText}
        </SuggestionButton>
      )}
      <QuickReplySuggestions
        suggestions={aiResults}
        onClick={handleSuggestionClick}
      />
    </div>
  );
}
export default DescriptionGenerator;

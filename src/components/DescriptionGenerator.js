import React, { useState, useEffect } from 'react'
import moduleAI from '../../lib/moduleAI';
import QuickReplySuggestions from './QuickReplySuggestions';
import './styles.scss';

function DescriptionGenerator({ siteDesc, siteTitle, siteType, siteSubtype, siteUrl, handleSuggestionClick }) {

  const [aiResults, setAIResults] = useState([]);
  const [suggestionButton, setSuggestionButton] = useState(false);
  const [btnText, setBtnText] = useState('Show Suggestions');

  /* const handleSuggestionClick = (suggestion) => {
    setSiteDesc(suggestion);
  }; */

  useEffect(() => {
    if (siteDesc) {
      setSuggestionButton(true);
    }
    return () => {
    }
  }, [siteDesc])

  const getAIResult = async () => {
    console.log("Get AI component");
    if (siteDesc && siteTitle) {
      const userPrompt = `current description is ${siteDesc} site title is ${siteTitle} site type is ${siteType} sub type is ${siteSubtype} site url is ${siteUrl}`;
      try {
        setBtnText("Fetching Suggestions...");
        const result = await moduleAI.search.getSearchResult(
          userPrompt,
          'descgenerator'
        );
        console.log("Result", result);
        setAIResults(result.result);
      } catch (exception) {
        console.log('exception', exception);
        setBtnText("Show Suggestions");
      } finally {
        setBtnText("Show Suggestions");
        console.log('Finally block');
      }
    }
  };

  return (
    <div>
      <button
        className='button'
        onClick={() => { getAIResult() }}
      >
        {btnText}
      </button>
      <QuickReplySuggestions
        suggestions={aiResults}
        onClick={handleSuggestionClick}
      />
    </div>
  )
}

export default DescriptionGenerator
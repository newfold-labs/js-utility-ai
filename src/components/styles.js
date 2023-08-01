import styled from 'styled-components';

export const SuggestionButton = styled.button`
  padding: 5px 15px !important;
  background-color: white !important;
`;

export const QuickReplyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  text-align: left;
`;

export const QuickReplySuggestion = styled.div`
  cursor: pointer;
  padding: 12px;
  margin: 4px 0;
  border-radius: 25px;
  border: 1px solid #e0e0e0;

  &:hover {
    background-color: #f0f0f0;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  @media (max-width: 640px) {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 0 rgba(0, 0, 0, 0.08);
    min-height: 4rem;
    padding-right:1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #1a1a1a;
  }
`;

export const HeaderTitle = styled.label`
  font-size: 1.5em;
  align-self: center;
  font-weight: $regular;
  color: $white;
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  max-width: 75%;
  min-width: 75%;
  align-items: center;
  border-radius: 2px;
`;

export const Search = styled.input`
  type: text;
  placeholder:"Search";
  font-size: 1em;
  outline: none;
  min-width: 75%;
  padding: 12px 20px 12px 20px;
  color: #37474f;
  border-width:0;
`;

export const ClearButton = styled.label`
  cursor: pointer;
  font-weight: 500;
  color:#a2a2a2;
`;

export const Icon = styled.span`
  padding-top:4px;
  padding-right: 10px;
`;


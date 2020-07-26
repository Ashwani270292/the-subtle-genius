import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  @media (max-width: 640px) {
    position: absolute;
    bottom:0;
    width: 100%;
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.16), 0 2px 0 0 rgba(0, 0, 0, 0.08);
    min-height: 4rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
  }
`;

export const Icon = styled.span`
  padding-top:4px;
  padding-right: 1rem;
  padding-left: 1rem;
  
`;


import React from 'react';
import { StyledContent, BelowHeader, ArticleBelowHeader } from './styles';

const Container = ({ type, children, row, padding, paddingLeftRight , ...props}) => {

  let scroll = props.onScroll !== undefined ? props.onScroll : null;
  
  switch(type){
    case "articleBelowHeader":
                            return(
                                <>
                                  <ArticleBelowHeader onScroll={props.onScroll}>
                                   {children}
                                  </ArticleBelowHeader>
                                </>
                              );
    case "belowHeader":return (
                        <>
                          <BelowHeader>
                            {children}
                          </BelowHeader>
                        </>
                      );
    default:return (
                  <>
                    <StyledContent row={row} paddingLeftRight={paddingLeftRight}>
                      {children}
                    </StyledContent>
                  </>
                );

  }

  };
  
  export default Container;

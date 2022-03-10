import styled from 'styled-components';

export const Container = styled.div`
  --horizontalPadding: 16px;
  --verticalPadding: 20px;

  padding: var(--horizontalPadding) var(--verticalPadding);
`;


export const Main = styled.div`
  display: flex;
  flex-direction: column;


  

`  
export const LeftSide = styled.div`
  @media (min-width: 768px) {
      width: 25%;
  }

` 
export const RightSide = styled.div`
@media (min-width: 768px) {
      width: 75%;
  }

`
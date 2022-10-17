import styled from '@emotion/styled';

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 40px;
  font-weight: 900;
  color: #1bbad9;

  background-color: #f9f95b;
`;

export const Span = styled.span`
  font-size: 50px;
  font-weight: 900;
  transition-delay: 500ms;
    transition-duration: 500ms;
    transition-timing-function: ease-in-out;
    transition-property: color, transform;
  transform: scale(0.75);

  &:hover {
    transition-property: color, transform;
  transition-timing-function: ease-in-out;
  transition-delay: 500ms;
    transition-duration: 500ms;
    color: blue;
    transform: scale(1.45);

   
  }
`;

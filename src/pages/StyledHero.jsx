import styled from 'styled-components';
import defaultImg from '../images/room-1.jpeg';

const StyledHero = styled.button`
  min-height: 60vh;
  background: url(${(props) => props.img}) ;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  background: green;
`;
export default StyledHero;

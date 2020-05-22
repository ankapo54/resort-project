import styled from 'styled-components'
import defaultImg from '../images/rooms/extra.jpg'

const StyledHero = styled.header`
min-height: 60vh;
background: url(${props => props.img? props.img:defaultImg}) center/cover no-repeat;
opacity: 0.8;
display: flex;
align-items: center;
justify-content: center;
`;

export default StyledHero;
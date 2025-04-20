import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ToggleButton = styled.button`
width: 50px;
height: 24px;
background-color: #ccc;
border: none;
border-radius: 12px;
position: relative;
cursor: pointer;
&:focus { outline: none; }

&::after {
  content: '';
  position: absolute;
  top: 2px;
  left: calc(100% - 22px); // Começa à direita (B2C visualmente)
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
  transition: left 0.2s ease;
}

&.b2c {
  background-color: #1d311f;
}

&.b2c::after {
  left: 2px; // Vai pra esquerda (modo B2B visualmente)
}
`;


const SwitchToggle = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isB2B = location.pathname === '/';

  const handleToggle = () => {
    navigate(isB2B ? '/b2c' : '/');
  };

  return (
    <ToggleButton
      onClick={handleToggle}
      className={isB2B ? '' : 'b2c'}
      aria-label="Alternar B2B/B2C"
    />
  );
};

export default SwitchToggle;

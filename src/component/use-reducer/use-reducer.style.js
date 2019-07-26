import styled from 'styled-components'

export const StyledSquare = styled.div`
  margin: 3rem;
  width: 100px;
  height: 100px;
  position: relative;
  transform: scale(${({ state }) => state.scale});

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: rotate(${({ state }) => state.rotate}deg);
    background-color: rgba(${({ state: { red, green, blue, alpha } }) => `${red}, ${green}, ${blue}, ${alpha}`});
  }
`

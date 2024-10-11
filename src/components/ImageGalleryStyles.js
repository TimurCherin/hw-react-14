import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  padding-top: 50px;
`;

export const SearchHeader = styled.div`
  background-color: purple;
  display: flex;
  justify-content: center;
  gap: 15px;
  height: 50px;
  align-items: center;
  width: 100%;
  position: fixed;
  z-index: 5;
`;

export const SearchInput = styled.input`
  padding: 5px;
`;

export const SearchButton = styled.button`
  background-color: azure;
  border-radius: 25%;
`;

export const Image = styled.img`
  display: block;
  object-fit: cover;
  object-position: center;
  transition: transform 400ms ease-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const AddButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  background-color: azure;
  border-radius: 25%;
`;

export const Body = styled.div`
  margin: 0;
  background: linear-gradient(45deg, #12c2e9, #c471ed, #f64f59);
  background-size: 400% 400%;
  animation: gradientAnimation 5s infinite;

  @keyframes gradientAnimation {
    0% { background-position: 0 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0 50%; }
  }
`;
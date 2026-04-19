import { useDispatch, useSelector } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import { toggleTheme } from "../redux/themeReducer";
import { darkTheme, lightTheme } from "../styles/theme";

const Container = styled.div`
  width: 600px;
  height: 300px;
  border: 2px solid #4a90e2;
  margin: 40px auto;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  background: ${({ theme }) => theme.header};
  color: ${({ theme }) => theme.accent};
  padding: 10px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
`;

const Subtitle = styled.p`
  margin-top: 10px;
  font-size: 12px;
`;

export default function ThemeApp() {
  const dark = useSelector((state) => state.dark);
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <Container>
        <Header>
          <span>THEME APP</span>
          <label>
            <input
              type="checkbox"
              checked={dark}
              onChange={() => dispatch(toggleTheme())}
            />
            {" "}Use Dark Theme
          </label>
        </Header>

        <Content>
          <Title>Welcome!</Title>
          <Subtitle>Full Stack Web Development</Subtitle>
        </Content>
      </Container>
    </ThemeProvider>
  );
}
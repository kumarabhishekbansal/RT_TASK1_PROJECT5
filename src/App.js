import React, { createContext } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Lists from "./pages/Lists";
import ListDetail from "./pages/ListDetail";
import ListForm from "./pages/ListForm";
import { ListsContextProvider } from "./context/ListsContext";
import { ItemsContextProvider } from "./context/ItemsContext";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <BrowserRouter>
          <Header />
          <ListsContextProvider>
            <ItemsContextProvider>
              <Routes>
                <Route path="/" element={<Lists />} />
                <Route path="/list/:listId/new" element={<ListForm />} />
                <Route path="/list/:listId" element={<ListDetail />} />
              </Routes>
            </ItemsContextProvider>
          </ListsContextProvider>
        </BrowserRouter>
      </AppWrapper>
    </>
  );
}
export default App;

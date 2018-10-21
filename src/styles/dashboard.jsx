import styled from 'styled-components';


export const DashboardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  display: grid;
  height: 100vh;
  grid-template-rows:     70px 1fr 70px;
  grid-template-columns:  250px 1fr;
  grid-template-areas:    "header header"
                          "nav    main"
                          "footer footer";
`;

export const MainWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 2em * -0.5;
    display: grid;
    grid-template-columns: 2, 1fr;
    grid-gap: 2em;
`;


export const Main = styled.main`
    flex: 1;
    grid-area: main;
    padding: 2em;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    background-color: #f4f7fa;
`;

export const Card = styled.div`
    height: 100%;
    padding: 1rem;
    font-size: 2rem;
    font-weight: 300;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
`;
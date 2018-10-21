import styled, { keyframes } from 'styled-components';

export const Footer = styled.div`
    display: flex;
    grid-area: footer;
    flex-basis: 100%;
    justify-content: space-between;
    align-items: center;
    height: $admin-footer-height;
    padding: 0 var(--spacing);
    color: #4e5561;
    background-color: #1d2127;
`;


export const Coinlist = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
`;


export const Coin = styled.li`
    margin-right: 1rem;
`;
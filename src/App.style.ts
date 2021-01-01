import BGImage from './images/nasa-aerial.jpg';
import FontImage from './images/ocean.jpg';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html{
    height: 100%
  }

  body {
    background-image: url(${BGImage});
    background-size: cover no-repeat;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center
  }

  * {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif
  }
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	> p {
		color: white;
	}

	.score {
		color: white;
		font-size: 2rem;
		margin: 0;
	}
	> h1 {
		font-family: 'Fascinate Inline', Impact, Haettenschweiler,
			'Arial Narrow Bold', sans-serif;
		/* background-image: linear-gradient(180deg, #fff, #87f1ff); */
		background-image: url(${FontImage});
		user-select: none;
		background-size: cover;
		background-clip: text;
		-webkit-background-clip: text;
		-moz-background-clip: text;
		-webkit-text-fill-color: transparent;
		-moz-text-fill-color: transparent;
		filter: drop-shadow(2px 2px 3px #87f1ff);
		font-size: 70px;
		text-align: center;
		margin: 0;
	}

	.start,
	.next {
		cursor: pointer;
		background: linear-gradient(180deg, #fff, #ffcc91);
		border: 2px solid #d38558;
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
		border-radius: 10px;
		height: 40px;
		margin: 20px 0px;
		padding: 0px 40px;
	}
	.start {
		max-width: 200px;
	}
	label {
		color: white;
		text-align: center;
		text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25);
	}
`;

export const GenreSelector = styled.select`
	/* height: 35px; */
	display: block;
	box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.5);
	padding: 10px;
`;

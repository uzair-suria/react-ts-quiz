import React from 'react';
import { QuestionCard } from './components';

const App: React.FunctionComponent = () => {
	const startQuiz = async () => {};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

	const nextQuestion = () => {};

	return (
		<div className="App">
			<h1>REACT QUIZ</h1>
			<button className="start" onClick={startQuiz}>
				START
			</button>
			<p className="score">Score:</p>
			<p>Loading Questions...</p>
			<QuestionCard />
		</div>
	);
};

export default App;

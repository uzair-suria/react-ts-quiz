import React, { useState } from 'react';

// API
import { fetchQuizQuestions } from './api';
import { QuestionState } from './api/fetchQuizQuestions';
import { genreMap } from './api/questionGenre';
import { GlobalStyle } from './App.style';

// Components
import { QuestionCard } from './components';

// Types

export type AnswerObject = {
	question: string;
	answer: string;
	correct: boolean;
	correctAnswer: string;
};

export type Genre = number;

const TOTAL_QUESTIONS = 10;

const App: React.FC = () => {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState<QuestionState[]>([]);
	const [number, setNumber] = useState(0);
	const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);
	const [genre, setGenre] = useState<Genre>(0);

	const genreKeys: string[] = Object.keys(genreMap);

	console.log(questions);

	const handleGenreChange = (e: React.FormEvent<HTMLSelectElement>) => {
		setGenre(Number(e.currentTarget.value));
	};

	const startQuiz = async () => {
		setLoading(true);
		setGameOver(false);

		const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, genre);

		setQuestions(newQuestions);
		setScore(0);
		setUserAnswers([]);
		setNumber(0);
		setLoading(false);
	};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (!gameOver) {
			// User Answer
			const answer = e.currentTarget.value;
			// Check Answer
			const correct = questions[number].correct_answer === answer;
			// Handle the result
			if (correct) setScore((prev) => prev + 1);
			// Save answer in the array "userAnswer"
			const answerObject: AnswerObject = {
				question: questions[number].question,
				answer,
				correct,
				correctAnswer: questions[number].correct_answer,
			};
			setUserAnswers((prev) => [...prev, answerObject]);
		}
	};

	const nextQuestion = () => {
		// move to next question if not at last question
		const nextQuestion = number + 1;
		if (nextQuestion === TOTAL_QUESTIONS) {
			setGameOver(true);
		} else {
			setNumber(nextQuestion);
		}
	};

	return (
		<>
			<GlobalStyle />
			<div className="App">
				<h1>REACT QUIZ</h1>
				{gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
					<>
						<button className="start" onClick={startQuiz}>
							Start
						</button>
						<label>
							Select the Quiz Genre
							<select value={genre} onChange={handleGenreChange}>
								{genreKeys.map((key: string) => (
									<option value={genreMap[key]} key={key}>
										{key}
									</option>
								))}
							</select>
						</label>
					</>
				) : null}
				{!gameOver ? <p className="score">Score: {score}</p> : null}
				{loading ? <p>Loading Questions...</p> : null}

				{!loading && !gameOver ? (
					<QuestionCard
						questionNumber={number + 1}
						totalQuestions={TOTAL_QUESTIONS}
						question={questions[number].question}
						answers={questions[number].answers}
						userAnswer={userAnswers ? userAnswers[number] : undefined}
						callback={checkAnswer}
					/>
				) : null}
				{!gameOver &&
				!loading &&
				userAnswers.length === number + 1 &&
				number !== TOTAL_QUESTIONS - 1 ? (
					<button className="next" onClick={nextQuestion}>
						Next Question
					</button>
				) : null}
			</div>
		</>
	);
};

export default App;

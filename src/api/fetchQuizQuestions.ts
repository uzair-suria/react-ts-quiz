import { arrayShuffle } from '../utils';
import { Difficulty } from './';

export type Question = {
	category: string;
	correct_answer: string;
	difficulty: string;
	incorrect_answers: string[];
	question: string;
	type: string;
};

export type QuestionState = Question & { answers: string[] };

export const fetchQuizQuestions = async (
	amount: number,
	difficulty: Difficulty
) => {
	const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

	const rawData = await fetch(endpoint);
	const data = await rawData.json();

	return data.results.map((question: Question) => ({
		...question,
		answers: arrayShuffle([
			...question.incorrect_answers,
			question.correct_answer,
		]),
	}));
};

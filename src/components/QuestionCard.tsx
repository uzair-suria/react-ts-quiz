import React from 'react';

import parse from 'html-react-parser';

// Types
import { AnswerObject } from '../App';
import { QuestionCardWrapper, AnswerWrapper } from './Question.style';

type Props = {
	question: string;
	answers: string[];
	callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
	userAnswer: AnswerObject | undefined;
	questionNumber: number;
	totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
	question,
	answers,
	callback,
	userAnswer,
	questionNumber,
	totalQuestions,
}) => {
	return (
		<QuestionCardWrapper>
			<p className="number">
				Question: {questionNumber} / {totalQuestions}
			</p>
			<p>{parse(question)}</p>
			{/* <p dangerouslySetInnerHTML={{ __html: question }} /> */}
			<div>
				{answers.map((ans) => (
					<AnswerWrapper
						key={ans}
						correct={userAnswer?.correctAnswer === ans}
						userClicked={userAnswer?.answer === ans}
					>
						<button
							disabled={userAnswer ? true : false}
							value={ans}
							onClick={callback}
						>
							<span>{parse(ans)}</span>
						</button>
					</AnswerWrapper>
				))}
			</div>
		</QuestionCardWrapper>
	);
};

export default QuestionCard;

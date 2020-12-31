import React from 'react';

import parse from 'html-react-parser';

// Types
import { AnswerObject } from '../App';

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
		<div>
			<p className="number">
				Question: {questionNumber} / {totalQuestions}
			</p>
			<p>{parse(question)}</p>
			{/* <p dangerouslySetInnerHTML={{ __html: question }} /> */}
			<div>
				{answers.map((ans) => (
					<div key={ans}>
						<button
							disabled={userAnswer ? true : false}
							value={ans}
							onClick={callback}
						>
							<span>{parse(ans)}</span>
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default QuestionCard;

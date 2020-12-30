import React from 'react';

import parse from 'html-react-parser';

type Props = {
	question: string;
	answers: string[];
	callback: any;
	userAnswer: any; //string;
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
						<button disabled={userAnswer} onClick={callback}>
							<span>{parse(ans)}</span>
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default QuestionCard;

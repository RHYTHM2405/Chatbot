import { Example } from "./Example";

import styles from "./Example.module.css";

const DEFAULT_EXAMPLES: string[] = [
    "What kind of learner analysis does Assessfy offer?",
    "What sectors can benefit from Assessfy's assessment solutions?",
    "What features does Assessfy offer for corporate recruitment?"
];

const GPT4V_EXAMPLES: string[] = [
    "What kind of learner analysis does Assessfy offer?",
    "What sectors can benefit from Assessfy's assessment solutions?",
    "What features does Assessfy offer for corporate recruitment?"
];

interface Props {
    onExampleClicked: (value: string) => void;
    useGPT4V?: boolean;
}

export const ExampleList = ({ onExampleClicked, useGPT4V }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {(useGPT4V ? GPT4V_EXAMPLES : DEFAULT_EXAMPLES).map((question, i) => (
                <li key={i}>
                    <Example text={question} value={question} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};

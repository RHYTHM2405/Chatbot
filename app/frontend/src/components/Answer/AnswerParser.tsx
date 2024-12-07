import { renderToStaticMarkup } from "react-dom/server";

type HtmlParsedAnswer = {
    answerHtml: string;
    citations: string[];
};

export function parseAnswerToHtml(answer: string, isStreaming: boolean): HtmlParsedAnswer {
    // trim any whitespace from the end of the answer after removing follow-up questions
    let parsedAnswer = answer.trim();

    // Omit a citation that is still being typed during streaming
    if (isStreaming) {
        let lastIndex = parsedAnswer.length;
        for (let i = parsedAnswer.length - 1; i >= 0; i--) {
            if (parsedAnswer[i] === "]") {
                break;
            } else if (parsedAnswer[i] === "[") {
                lastIndex = i;
                break;
            }
        }
        const truncatedAnswer = parsedAnswer.substring(0, lastIndex);
        parsedAnswer = truncatedAnswer;
    }

    // Split the answer into parts and directly join them, removing citation handling
    const parts = parsedAnswer.split(/\[([^\]]+)\]/g);

    const fragments: string[] = parts.map((part, index) => {
        if (index % 2 === 0) {
            return part;
        } else {
            return ""; // Remove citation parts
        }
    });

    return {
        answerHtml: fragments.join(""),
        citations: [] // No citations are being collected
    };
}

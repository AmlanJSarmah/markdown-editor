import parse from "html-react-parser";
import { useState, useEffect } from "react";
import { markdownCreator } from "../utils";

interface props {
	text: string | null;
}

export const Compiler: React.FC<props> = ({ text }) => {
	const [renderText, setRenderText] = useState<string | null>(text);

	//updates text at each render
	useEffect(() => {
		setRenderText(markdownCreator(text));
	}, [text]);

	return (
		<div style={{ wordWrap: "break-word" }}>
			{renderText !== null ? parse(renderText) : renderText}
		</div>
	);
};

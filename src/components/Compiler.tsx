import parse from "html-react-parser"

interface props {
	text: string | null;
}

export const Compiler: React.FC<props> = ({ text }) => { 
	return (
		<div style={{ wordWrap: "break-word" }}>
			{ (text!==null) ? parse(text) : text}
		</div>
	);
} 
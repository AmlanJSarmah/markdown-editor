import {Compiler} from "./Compiler"

interface props {
  text: string | null;
}

export const Markdown: React.FC<props> = ({ text }) => {
  return (
    <div className="col-6 p-0 text-center" id="output">
      <div className="border-bottom border-dark">Output</div>
      <Compiler text={text}/>
    </div>
  );
};

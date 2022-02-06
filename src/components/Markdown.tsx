interface props {
  text: string | null;
}

export const Markdown: React.FC<props> = ({ text }) => {
  return (
    <div className="col-6 p-0 text-center" id="output">
      <div className="border-bottom border-dark">Output</div>
      <div style={{ wordWrap: "break-word" }}>{text}</div>
    </div>
  );
};

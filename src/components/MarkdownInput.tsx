interface props {
  setNewValue(value: string | null): void;
}

export const MarkdownInput: React.FC<props> = ({ setNewValue }) => {
  return (
    <div className="col-6 p-0 text-center border-end border-dark" id="editor">
      <div className="border-bottom border-dark">Editor</div>
      <textarea
        onChange={(element) => {
          let text = element.target.value;
          if (text == null) {
            setNewValue(null);
            return;
          }
          text = text.replaceAll(" ", "&nbsp;");
          text = text.replaceAll("\n", "<br/>");
          setNewValue(text);
        }}
      />
    </div>
  );
};

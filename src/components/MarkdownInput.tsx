interface props {
  setNewValue(value: string | null): void;
  text: string | null;
}

export const MarkdownInput: React.FC<props> = ({ setNewValue,text }) => {
  const defaultValue = (text: string | null) => {
    if (!text) return 
    return text
  }
  return (
    <div className="col-6 p-0 text-center border-end border-dark" id="editor-input">
      <div className="border-bottom border-dark">Editor</div>
      <textarea
        defaultValue = {defaultValue(text)}      
        onChange={(element) => {
          let text = element.target.value;
          setNewValue(text);
        }}
      />
    </div>
  );
};

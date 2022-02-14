import React, { useEffect, useState } from "react";
import { Markdown } from "./Markdown";
import { MarkdownInput } from "./MarkdownInput";
import { manageStorage } from "../utils"

export const Editor: React.FC = () => {
  const [text, setText] = useState<string | null>(null);
  useEffect(() => {
    manageStorage(text)
  }, [text]);
  const updateText = (text: string | null) => {
    if (text == null) {
      setText(null);
      return;
    }
    text = text.replaceAll("\n", "<br/>");
    setText(text);
  };
  return (
    <div className="container-xxl mt-5" id="editor">
      <div className="row justify-content-between border border-dark" id="editor-child">
        <MarkdownInput setNewValue={updateText}/>
        <Markdown text={text} />
      </div>
    </div>
  );
};

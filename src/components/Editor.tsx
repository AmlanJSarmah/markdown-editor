import React, { useEffect, useState } from "react";
import { Markdown } from "./Markdown";
import { MarkdownInput } from "./MarkdownInput";

export const Editor: React.FC = () => {
  const [text, setText] = useState<string | null>(null);
  useEffect(() => {
    console.log(text);
  }, [text]);
  return (
    <div className="container-xxl mt-5" id="editor">
      <div className="row justify-content-between border border-dark">
        <MarkdownInput setNewValue={setText} />
        <Markdown text={text} />
      </div>
    </div>
  );
};

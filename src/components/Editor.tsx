import React from "react";
import { Markdown } from "./Markdown";
import { MarkdownInput } from "./MarkdownInput";

export const Editor: React.FC = () => {
  return (
    <div className="container-xxl mt-5" id="editor">
      <div className="row justify-content-between border border-dark">
        <MarkdownInput />
        <Markdown />
      </div>
    </div>
  );
};

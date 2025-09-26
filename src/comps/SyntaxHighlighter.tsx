"use client";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import { useEffect, useRef } from "react";
type SyntaxHighlighterProp = {
  children: React.ReactNode;
  language?: string;
};
const SyntaxHighlighter: React.FC<SyntaxHighlighterProp> = ({
  children,
  language,
}) => {
  const codeRef = useRef(null);
  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [children]);
  return (
    <pre className="mb-4 rounded-md md:mb-6">
      <code ref={codeRef} className={language ? `language-${language}` : ""}>
        {children}
      </code>
    </pre>
  );
};
export default SyntaxHighlighter;

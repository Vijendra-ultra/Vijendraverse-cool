import dynamic from "next/dynamic";

export const componentsMap: Record<string, any> = {
  SyntaxHighlighter: dynamic(() => import("./SyntaxHighlighter")),
};

"use client";

import { useEffect, useRef } from "react";
import { EditorView, basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";

const HeroCodeEditor = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);

  useEffect(() => {
    if (!editorRef.current) return;

    // Sample syntax snippet to display
    const sampleCode = `// React useState Hook 
const [count, setCount] = useState(0); 
      
// Event handler 
const handleClick = () => { 
  setCount(prev => prev + 1); 
}; 
      
// Array filter 
const active = items.filter(i => i.active);`;

    const view = new EditorView({
      doc: sampleCode,
      extensions: [
        basicSetup,
        javascript(),
        oneDark,
        EditorView.theme({
          "&": {
            fontSize: "clamp(12px, 2vw, 14px)",
            fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
          },
          ".cm-focused": {
            outline: "none",
          },
          ".cm-editor": {
            borderRadius: "0 0 8px 8px",
            fontSize: "clamp(12px, 2vw, 14px)",
          },
          ".cm-scroller": {
            padding: "clamp(11px, 2vw, 16px)",
            fontSize: "clamp(12px, 2vw, 14px)",
          },
          ".cm-content": {
            fontSize: "clamp(12px, 2vw, 14px)",
            fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace !important',
          },
          ".cm-line": {
            fontSize: "clamp(12px, 2vw, 14px)",
          },
        }),
        EditorView.editable.of(false), // Read-only for hero
      ],
      parent: editorRef.current,
    });

    viewRef.current = view;

    return () => {
      view.destroy();
    };
  }, []);

  return (
    <div className="w-full max-w-[600px] mt-9 mx-auto lg:mt-25">
      {/* Editor Window Header */}
      <div className="bg-gray-800 rounded-t-lg px-3 py-2 flex items-center space-x-2 md:px-4 md:py-3">
        <div className="flex space-x-1.5 md:space-x-2">
          <div className="w-2.5 h-2.5 bg-red-500 rounded-full md:w-3 md:h-3"></div>
          <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full md:w-3 md:h-3"></div>
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full md:w-3 md:h-3"></div>
        </div>
      </div>

      {/* Code Editor */}
      <div
        ref={editorRef}
        className="rounded-b-lg border-l border-r border-b border-gray-700 overflow-hidden shadow-xl bg-[#282c34] md:shadow-2xl"
      />
    </div>
  );
};

export default HeroCodeEditor;

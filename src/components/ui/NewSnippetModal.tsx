import React, { useState, useEffect, useRef } from "react";
import Modal from "./Modal";
import { EditorView, basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { sql } from "@codemirror/lang-sql";
import { go } from "@codemirror/lang-go";
import { rust } from "@codemirror/lang-rust";
import { EditorState } from "@codemirror/state";

interface NewSnippetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const getLanguageSupport = (lang: string) => {
  const map: Record<string, any> = {
    javascript: javascript(),
    typescript: javascript({ typescript: true }),
    react: javascript({ jsx: true }),
    python: python(),
    html: html(),
    css: css(),
    sql: sql(),
    go: go(),
    rust: rust(),
  };
  return map[lang] || javascript();
};

const NewSnippetModal = ({ isOpen, onClose }: NewSnippetModalProps) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    language: "javascript",
    code: "",
    tags: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    if (!isOpen || !editorRef.current) return;

    // Destroy existing editor
    viewRef.current?.destroy();

    const extensions = [
      basicSetup,
      getLanguageSupport(formData.language),
      EditorView.updateListener.of((update) => {
        if (update.changes) {
          setFormData((prev) => ({
            ...prev,
            code: update.state.doc.toString(),
          }));
        }
      }),
      EditorView.theme({
        "&": { fontSize: "14px" },
        ".cm-content": {
          minHeight: "120px",
          padding: "12px",
          fontFamily: "ui-monospace, SFMono-Regular, Consolas, monospace",
        },
        ".cm-focused": { outline: "none" },
      }),
    ];

    viewRef.current = new EditorView({
      state: EditorState.create({
        doc: formData.code,
        extensions,
      }),
      parent: editorRef.current,
    });

    return () => viewRef.current?.destroy();
  }, [isOpen, formData.language]);

  useEffect(() => {
    if (
      viewRef.current &&
      viewRef.current.state.doc.toString() !== formData.code
    ) {
      viewRef.current.dispatch({
        changes: {
          from: 0,
          to: viewRef.current.state.doc.length,
          insert: formData.code,
        },
      });
    }
  }, [formData.code]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const snippetData = {
        title: formData.title,
        description: formData.description,
        language: formData.language,
        code: formData.code,
        tags: formData.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
      };
      const res = await fetch("/api/snippets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(snippetData),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to save snippet");
      }
      const result = await res.json();
      console.log("Snippet saved:", result);
    } catch (error) {
      console.error("Error saving snippet:", error);
      alert("Failed to save snippet");
    } finally {
      setIsLoading(false);
    }

    // Close modal and reset form
    setFormData({
      title: "",
      description: "",
      language: "javascript",
      code: "",
      tags: "",
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Snippet">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title *
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => handleChange("title", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="e.g., React useState Hook"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 mt-4">
            Description
          </label>
          <input
            type="text"
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Brief description of what this snippet does"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 mt-4">
            Language *
          </label>
          <select
            value={formData.language}
            onChange={(e) => handleChange("language", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
            <option value="python">Python</option>
            <option value="react">React</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="sql">SQL</option>
            <option value="go">Go</option>
            <option value="rust">Rust</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 mt-4">
            Code *
          </label>
          <div
            ref={editorRef}
            className="border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2 mt-4">
            Tags
          </label>
          <input
            type="text"
            value={formData.tags}
            onChange={(e) => handleChange("tags", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="hooks, state, react (comma separated)"
          />
          <p className="text-xs text-gray-500 mt-1">
            Separate tags with commas
          </p>
        </div>
        <div className="flex gap-3 pt-4 border-t">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            disabled={isLoading}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {isLoading ? "Saving..." : "Save Snippet"}
          </button>
        </div>
      </form>
    </Modal>
  );
};
export default NewSnippetModal;

"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";

type Props = {
  value: string;
  onChange: (html: string) => void;
};

function ToolbarButton({
  pressed,
  onClick,
  children,
}: {
  pressed?: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button type="button" className={pressed ? "is-active" : ""} onClick={onClick}>
      {children}
    </button>
  );
}

export function RichTextEditor({ value, onChange }: Props) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
        code: false,
        codeBlock: false,
      }),
      Underline,
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
        HTMLAttributes: {
          rel: "noopener noreferrer",
          target: "_blank",
        },
      }),
      Placeholder.configure({
        placeholder: "Escreva o texto do artigo. Use a barra acima para formatar.",
      }),
    ],
    content: value || "",
    onUpdate: ({ editor: current }) => {
      onChange(current.getHTML());
    },
  });

  if (!editor) {
    return <div className="editor editor-loading">Carregando editor...</div>;
  }

  const current = editor;

  function setLink() {
    const previous = current.getAttributes("link").href as string | undefined;
    const url = window.prompt("Cole o link", previous || "https://");
    if (url === null) return;
    if (!url.trim()) {
      current.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    current.chain().focus().extendMarkRange("link").setLink({ href: url.trim() }).run();
  }

  return (
    <div className="editor">
      <div className="editor-toolbar" role="toolbar" aria-label="Formatação do texto">
        <ToolbarButton pressed={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()}>
          Negrito
        </ToolbarButton>
        <ToolbarButton pressed={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()}>
          Itálico
        </ToolbarButton>
        <ToolbarButton
          pressed={editor.isActive("underline")}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          Sublinhado
        </ToolbarButton>
        <ToolbarButton
          pressed={editor.isActive("heading", { level: 2 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        >
          Título
        </ToolbarButton>
        <ToolbarButton
          pressed={editor.isActive("heading", { level: 3 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        >
          Subtítulo
        </ToolbarButton>
        <ToolbarButton
          pressed={editor.isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          Lista
        </ToolbarButton>
        <ToolbarButton
          pressed={editor.isActive("orderedList")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          Numerada
        </ToolbarButton>
        <ToolbarButton
          pressed={editor.isActive("blockquote")}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          Citação
        </ToolbarButton>
        <ToolbarButton pressed={editor.isActive("link")} onClick={setLink}>
          Link
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().undo().run()}>Desfazer</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().redo().run()}>Refazer</ToolbarButton>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}

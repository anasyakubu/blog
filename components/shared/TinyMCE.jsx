"use client";
import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function TinyMCE() {
  const [value, setValue] = useState("");
  const [text, setText] = useState("");
  const onEditorInputChange = (newValue, editor) => {
    setValue(newValue);
    setText(editor.getContent({ format: "text" }));
  };
  const editorRef = useRef(null);
  const log = () => {
    // if (editorRef.current) {
    //   console.log(editorRef.current.getContent());
    // }
    console.log(value);
  };
  return (
    <>
      <Editor
        apiKey="8cpdqg02bmbiuybqqswmh6tu1py93qij387c4f9b5di3f1dg"
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        onEditorChange={(newValue, editor) =>
          onEditorInputChange(newValue, editor)
        }
        value={value}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  );
}

"use client";
import React, { useRef, useState } from "react";
import Nav from "../../../components/shared/Nav";
import ImageUpload from "../../Section/ImageUpload/ImageUpload";
import TinyMCE from "../../../components/shared/TinyMCE";
import Footer from "../../Section/Footer/Footer";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "../../../components/ui/button";
import { addBlog } from "../../../lib/actions/blog.action";

const CreateArticle = () => {
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
    <div className="CreateArticle">
      <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <Nav />
        <div className="g:px-6 py-1">
          <div className="p-20">
            <form action={addBlog}>
              <ImageUpload name="articleImage" />
              <div className="mt-5 space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                <input
                  className="p-5 w-full rounded-xl bg-white text-black outline-none border border-black"
                  type="text"
                  placeholder="Enter Article Title"
                  id="title"
                  name="title"
                  onChange={(e) => handleChangeTitle(e)}
                />
                <input
                  className="p-5 w-full rounded-xl bg-white text-black outline-none border border-black"
                  type="text"
                  placeholder="Enter Tag"
                  id="tag"
                  name="tag"
                  onChange={(e) => handleChangeTitle(e)}
                />
                <button className="p-5 w-full rounded-xl bg-black text-white outline-none border border-black">
                  {" "}
                  Generate Article Using AI
                </button>
              </div>
              <div className="mt-5">
                {/* <TinyMCE /> */}
                <Editor
                  apiKey="8cpdqg02bmbiuybqqswmh6tu1py93qij387c4f9b5di3f1dg"
                  onInit={(_evt, editor) => (editorRef.current = editor)}
                  initialValue="<p>Write Your Article Here</p>"
                  onEditorChange={(newValue, editor) =>
                    onEditorInputChange(newValue, editor)
                  }
                  value={value}
                  name="article"
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
                <input type="" name="article" id="value" value={value} />
              </div>
              <div className="mt-5">
                <Button type="submit">Post Article</Button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default CreateArticle;

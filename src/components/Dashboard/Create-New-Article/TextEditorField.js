import { Editor } from "@tinymce/tinymce-react";
function TextEditorField(props) {
  return (
    <>
      <label className="w-4 overflow-x-hidden">
        {props.label}
        <Editor
          apiKey="ulhc0ca6mfsxezplzcrem6d8aobxjo339ud9v3x6y6tc7d9x"
          init={{
            height: 480,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | " +
              "bold italic backcolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { width:100% }",
          }}
        />
      </label>
    </>
  );
}

export default TextEditorField;

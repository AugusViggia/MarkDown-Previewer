import "./App.css";
import { useState } from "react";
import { marked } from "marked";
import image from './tick.png';

function App() {
  const [text, setText] = useState(`
  # H1

  ## H2

  [title](https://www.example.com)

  \`code\`

  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`

  - First item
  - Second item
  - Third item

  > blockquote

  ![alt text](${image})

  **bold text**
  `);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  marked.setOptions({
    breaks: true,
  });

  return (
    <div className="App">
      <div className="editorDiv">
        <div className="tit1">
          <h3>Markdown Editor: </h3>
        </div>
        <div className="textAreaDiv">
          <textarea id="editor" onChange={handleChange} value={text}></textarea>
        </div>
      </div>
      <div className="previewDiv">
        <div className="tit2">
          <h3>Markdown Previewer: </h3>
        </div>
        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(text),
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
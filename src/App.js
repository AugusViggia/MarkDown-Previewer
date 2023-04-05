import "./App.css";
import { useState } from "react";
import { marked } from "marked";

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

  ![alt text](image.jpg)

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
      <h3>Markdown Editor: </h3>
      <textarea id="editor" onChange={handleChange} value={text}></textarea>
      <h3>Markdown Previewer: </h3>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked(text),
        }}
      ></div>
    </div>
  );
}

export default App;
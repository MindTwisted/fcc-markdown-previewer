import React from 'react'
import './App.css'
import MarkdownEditor from './components/MarkdownEditor'
import MarkdownPreviewer from './components/MarkdownPreviewer'

const initialText = `
# Welcome to my React Markdown Previewer!
## This is a sub-heading...

[I'm an inline-style link](https://www.google.com)

![React Logo w/ Text](https://goo.gl/Umyytc)

\`\`\`javascript
var s = "JavaScript syntax highlighting";
alert(s);
\`\`\`

Inline \`code\` has \`back-ticks around\` it.

1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Emphasis, aka italics, with *asterisks* or _underscores_.
Strong emphasis, aka bold, with **asterisks** or __underscores__.
Combined emphasis with **asterisks and _underscores_**.
Strikethrough uses two tildes. ~~Scratch this.~~
`

const App = () => {
  const [text, setText] = React.useState(initialText)

  return (
    <div className="App">
      <div className='container'>
        <h1 className='is-size-1' style={{ marginBottom: '2rem' }}>Markdown Application</h1>

        <div className='columns'>
          <div className='column'>
            <MarkdownEditor text={text} setText={setText} />
          </div>
          <div className='column'>
            <MarkdownPreviewer text={text} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

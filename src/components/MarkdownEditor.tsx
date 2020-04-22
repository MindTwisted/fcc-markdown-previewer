import React from 'react'

type MarkdownEditorProps = {
    text: string
    setText: (text: string) => void
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ text, setText }: MarkdownEditorProps) => {
  return (
    <div className='message is-dark'>
      <div className='message-header'>
        <p>Editor</p>
      </div>
      <textarea id='editor'
        style={{ minHeight: '20rem' }}
        onChange={e => setText(e.target.value)}
        className='textarea'>
        { text }
      </textarea>
    </div>
  )
}

export default MarkdownEditor

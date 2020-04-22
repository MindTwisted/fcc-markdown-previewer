import React from 'react'
import marked from 'marked'

marked.setOptions({
  breaks: true
})

type MarkdownPreviewerProps = {
    text: string
}

const MarkdownPreviewer: React.FC<MarkdownPreviewerProps> = ({ text }: MarkdownPreviewerProps) => {
  return (
    <div className='message is-dark'>
      <div className='message-header'>
        <p>Previewer</p>
      </div>
      <div id='preview'
        className='message-body'
        style={{ minHeight: '20rem' }}
        dangerouslySetInnerHTML={{ __html: marked(text) }} />
    </div>
  )
}

export default MarkdownPreviewer

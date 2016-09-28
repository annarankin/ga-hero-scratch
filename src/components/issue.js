import React from 'react'

const Issue = ({issueKey, fields, renderedFields}) => {
  return(
    <li className="issue">
      <p>{`${issueKey}: ${fields.summary}`}</p>
      <p dangerouslySetInnerHTML={{__html: renderedFields.description}} />
    </li>
  )
}

export default Issue
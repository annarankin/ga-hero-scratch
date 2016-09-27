import React from 'react'

const IssueList = ({startAt, maxResults, total}) => {
  return(
    <div className="issue-list">
      <p>{`Showing ${startAt}-${maxResults} of ${total} issues.`}</p>
    </div>
  )
}

export default IssueList
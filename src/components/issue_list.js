import React from 'react'
import Issue from './issue';

const IssueList = ({startAt, maxResults, total, issues}) => {
  return(
    <div className="issue-list">
      <p>{`Showing ${startAt}-${maxResults < total ? maxResults : total } of ${total} issues.`}</p>

      <ol>
        {issues.map(issue => <Issue { ...issue } issueKey={issue.key} />)}
      </ol>
    </div>
  )
}

export default IssueList
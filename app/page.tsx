import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className='m-auto'>
        When navigating between pages, we want to persist page state (input values, scroll position, etc.) for a Single-Page Application (SPA) experience.

This layout pattern enables state persistence because the React component tree is maintained between page transitions. With the component tree, React can understand which elements have changed to preserve state
      </h1>
    </div>
  )
}

export default page

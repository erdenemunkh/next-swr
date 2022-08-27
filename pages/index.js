import React from 'react'
import { Page } from "./page";

export default function Home() {
  const [pageIndex, setPageIndex] = React.useState(2);

  const pages = []
  for (let i = 1; i < pageIndex; i++) {
    pages.push(<Page index={i} key={i} />)
  }

  return (
    <main className='App'>
      {pages}
      <button onClick={() => setPageIndex(pageIndex + 1)}>Load More</button>
    </main>
  )
}

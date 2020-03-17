import * as React from 'react'
import Link from 'next/link'

const Navigation = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>page1</a>
          </Link>
        </li>
        <li>
          <Link href="/second">
            <a>page2</a>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Navigation

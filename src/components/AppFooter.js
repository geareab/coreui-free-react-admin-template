import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://sm.geareab.com" target="_blank" rel="noopener noreferrer">
          GeareAB
        </a>
        <span className="ms-1">&copy; 2022 Simran Medicos.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)

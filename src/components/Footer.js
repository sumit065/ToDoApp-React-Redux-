import React from 'react'
import Link from '../containers/Link'
import { VisibilityFilters } from '../actions'

const Footer = () => (
    <p>
        Show: <Link filter={VisibilityFilters.SHOW_ALL} children = "All"/>
        {', '}
        <Link filter={VisibilityFilters.SHOW_ACTIVE}>Active</Link>
        {', '}
        <Link filter={VisibilityFilters.SHOW_COMPLETED}>Completed</Link>
    </p>
)

export default Footer
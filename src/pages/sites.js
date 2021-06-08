import React from 'react'
import { Link } from 'gatsby'
import slugify from 'slugify'

import './sites.scss'

const Sites = (props) => {
    let data = props.pageContext.sites
    let sites
    if (data) {
        sites = data.map(s => {
            const slug = slugify(s.name, { lower: true })
            return (
                <Link to={`/sites/${slug}`}>
                    <div key={s.id} className='content-site'>
                        <span>{s.id}</span>
                        <div>
                            {s.name}
                        </div>

                        <div>
                            {s.api_url}
                        </div>
                    </div>
                </Link>
            )
        })
    }
    return (
        <div id='site'>
            <h1>Sites from Private API</h1>
            <section className='sites'>
                {sites}
            </section>
        </div>
    )
}

export default Sites

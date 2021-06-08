import React from 'react'

const Site = (props) => {
    let site = props.pageContext.site
    
    return (
        <section>
            <h1>SITE</h1>
            {
                site ? 
                <article>
                    <h3>Id: {site.id}</h3>
                    <h4>Name: {site.name}</h4>
                    <p>Url: {site.api_url}</p>
                </article>
                : <></>
            }
        </section>
    )
}

export default Site

import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

// if head's props are undefined, then default values from siteMetadata will be used

// find out how different sized apple icons get generated

const Head = ({
  title,
  description,
  pathname,
  socialImage,
  twitterUsername,
}) => {
  const {
    site: {
      siteMetadata: {
        siteUrl,
        title: defaultTitle,
        description: defaultDescription,
        socialImage: defaultSocialImage,
        twitterUsername: defaultTwitterUsername,
      },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            title
            description
            socialImage
            twitterUsername
          }
        }
      }
    `
  )

  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;700&display=swap"
        rel="stylesheet"
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}${pathname}`} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta
        property="og:image"
        content={`${siteUrl}${socialImage || defaultSocialImage}`}
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:creator"
        content={twitterUsername || defaultTwitterUsername}
      />
      <meta property="twitter:url" content={`${siteUrl}${pathname}`} />
      <meta property="twitter:title" content={title || defaultTitle} />
      <meta
        property="twitter:description"
        content={description || defaultDescription}
      />
      <meta
        property="twitter:image"
        content={`${siteUrl}${socialImage || defaultSocialImage}`}
      />
    </Helmet>
  )
}

export default Head

const HomePageQuery = `
  query Homepage {
    page(id: "18", idType: DATABASE_ID) {
      databaseId
      slug
      title
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      homepage {
        certificationSection {
          certificationTitle
          certificationSubtitle
          videoCover{
            node{
              altText
              sourceUrl
            }
          }
          cards{
            icon{
              node{
                altText
                sourceUrl
              }
            }
            title
            content
          }
        }
        blogSection{
          title
          link{
            title
            target
            url
          }
          content
        }
        faqSection {
          faqTitle
          faqPoints {
            title
            subtitle
            content
          }
          faqLink{
            title
            url
          }
        }
        industrySection {
          industrySecTitle
          industrySecSubtitle
          industryLink{
            title
            url
          }
          industryCards {
            title
            content
            image{
              node{
                sourceUrl
                altText
              }
            }
          }
        }
        twi_sec{
          twiTitle
          twiSubtitle
          twiImage{
            node{
              altText
              sourceUrl
            }
          }
          points{
            label
          }
        }
        heroSection {
          heroSectionText
          heroSectionText2
          heroSectionImage {
            node {
              sourceUrl
              altText
            }
          }
          heroSectionLink {
            title
            url
            target
          }
        }
      }
    }
    posts(first: 3) {
      nodes{
        title
        featuredImage{
          node{
            altText
            sourceUrl
          }
        }
        uri
        date
        author{
          node{
            name
          }
        }
        excerpt
      }
    }
  }
`;

export default HomePageQuery;
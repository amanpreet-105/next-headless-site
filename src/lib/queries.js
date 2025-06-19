export const GET_ALL_PAGES = `
  {
    pages {
      nodes {
        title
        slug
      }
    }
  }
`;

export const GET_PAGE_BY_SLUG = `
  query Page($slug: ID!) {
    page(id: $slug, idType: URI) {
      title
      content
      slug
    }
  }
`;

export const GET_ALL_POSTS = `
  {
    posts {
      nodes {
        title
        slug
        excerpt
        date
      }
    }
  }
`;

export const GET_PRIMARY_MENU = `
 query Menu {
   menu(id: "Header Menu", idType: NAME) {
    databaseId
    menuItems(where: {parentDatabaseId: 0}) {
      nodes {
        label
        parentDatabaseId
        childItems {
          nodes {
            label
            uri
          }
        }
        uri
      }
    }
  }
  commonFields {
    postFields {
      headerSection {
        siteLogo {
          node {
            altText
            sourceUrl
          }
        }
        siteTitle
        headerButton{
          url
          title
          target
        }
      }
    }
  }
}`;

export const Footer_Section = `
query Footer {
  commonFields {
    postFields {
      footerSection {
        footerLogoContent
        quickLinks {
          link {
            title
            url
          }
        }
        followLinks{
          shareLink{
            title
            url
          }
          icon{
            node{
              sourceUrl
              altText
            }
          }
        }
        footerLogo {
          node {
            altText
            sourceUrl
          }
        }
      }
      copyrightSection{
        copyrightLeftContent
        copyrightLinkLeft{
          link{
            url
            title
            target
          }
        }
        copyrightLinkRight{
          link{
            title
            url
            target
          }
        }
      }
      contactInfo{
        address
        email
        telephone
        telephone2
      }
    }
  }
}`;

export const GET_HOME_PAGE = `
  query Homepage ($slug: ID!) {
    page(id: $slug, idType: DATABASE_ID) {
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
      seo{
        title
        metaDesc
        metaRobotsNoindex
        metaRobotsNofollow
        metaKeywords
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
    testimonials {
        nodes {
            title
            content
        }
    }
  }
`;

export const GET_FAQ_PAGE = `
  query FaqPage ($slug: ID!) {
    page(id: $slug, idType: DATABASE_ID) {
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
      title
      faqPage{
        faqTitle
        faqPoints{
          title
          subTitle
          content
        }
      }
      seo{
        title
        metaDesc
        metaRobotsNoindex
        metaRobotsNofollow
        metaKeywords
      }
    }
  }
`;

export const GET_ABOUT_US_PAGE = `
  query AboutUsPage ($slug: ID!) {
    page(id: $slug, idType: DATABASE_ID) {
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
      title
      aboutUsPage{
        certificationSec{
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
      }
      seo{
        title
        metaDesc
        metaRobotsNoindex
        metaRobotsNofollow
        metaKeywords
      }
    }
  }
`;

export const GET_BLOG_PAGE = `
  query BlogPage ($slug: ID!, $first: Int!, $after: String) {
    page(id: $slug, idType: DATABASE_ID) {
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
      title
      seo{
        title
        metaDesc
        metaRobotsNoindex
        metaRobotsNofollow
        metaKeywords
      }
    }
    posts(first: $first, after: $after) {
      nodes {
        databaseId
        title
        slug
        excerpt
        date
        author{
          node{
            name
          }
        }
        featuredImage{
          node{
            altText
            sourceUrl
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const GET_CONTACT_US_PAGE = `
  query ContactUsPage ($slug: ID!) {
    page(id: $slug, idType: DATABASE_ID) {
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
      title
      contactUs{
        contactSection{
          formTitle
          formContent
          contactAddressTitle
          contactAddress
          contactPhoneTitle
          contactPhone
          contactEmailTitle
          contactEmail
        }
      }
      seo{
        title
        metaDesc
        metaRobotsNoindex
        metaRobotsNofollow
        metaKeywords
      }
    }
}`;

export const GET_FOOTER_TOP = `
  query FooterTop {
    commonFields{
      postFields{
        footerTopSection{
          title
          content
          image{
            node{
              altText
              sourceUrl
            }
          }
          link{
            url
            title
          }
        }
      }
    }
  }
`;

export const GET_BLOG_POST = `
  query BlogPost($slug: ID!) {
    post(id: $slug, idType: SLUG) { 
      title
      content
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      author {
        node {
          name
        }
      }
      date
      excerpt
      seo{
        title
        metaDesc
        metaRobotsNoindex
        metaRobotsNofollow
        metaKeywords
      }
    }
  }
`;

export const GET_POSTS_CURSOR = `
  query BlogPostCursors($first: Int! ,$after: String) {
    posts(first: $first, after: $after) {
      nodes {
        databaseId
        title
        slug
        excerpt
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;
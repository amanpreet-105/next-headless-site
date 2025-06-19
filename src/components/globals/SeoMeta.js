import React from "react"

function SeoMeta({metaData}){

    return (
        <>
            <title>{metaData?.title ?? ''}</title>
            <meta key="dec" name="description" content={metaData?.metaDesc} />
            <meta name='robots' key='robots' content={`${metaData?.metaRobotsNoindex == undefined ? 'noindex' : metaData?.metaRobotsNoindex}, ${metaData?.metaRobotsNofollow == undefined ? 'nofollow' : metaData?.metaRobotsNofollow}, max-image-preview:large, max-snippet:-1`} />
            <meta name="keywords" key="keywords" content={metaData?.metaKeywords} />
        </>
    );
}

export default SeoMeta;
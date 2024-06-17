

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
    // const request = await fetch(EXTERNAL_DATA_URL);
    // const posts = await request.json();
    const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
      <url>
        <loc>https://www.marketingwaala.in/</loc>
      </url>
      <url>
        <loc>https://www.blogs.marketingwaala.in/</loc>
      </url>
  
     
    </urlset>
  `

    // const sitemap = generateSiteMap(posts);

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemapXML);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;
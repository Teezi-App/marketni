const fs = require('fs');

function main() {
  const html = fs.readFileSync('google_search_response.html', 'utf8');
  console.log('HTML Length:', html.length);
  
  // Look for rating stars, or text blocks with star ratings like "5/5" or "5.0"
  // Let's print out parts of the HTML that contain names or reviews
  const index = html.indexOf('Marketni');
  if (index !== -1) {
    console.log('Found Marketni in HTML. Snippets:');
    let pos = 0;
    while (true) {
      const matchPos = html.indexOf('Marketni', pos);
      if (matchPos === -1) break;
      console.log(`- Snippet at ${matchPos}:`, html.slice(matchPos - 50, matchPos + 150).replace(/[\r\n]+/g, ' '));
      pos = matchPos + 1;
      if (pos > index + 2000) {
        console.log('...truncated further matches...');
        break;
      }
    }
  } else {
    console.log('Marketni not found in raw HTML.');
  }
}

main();

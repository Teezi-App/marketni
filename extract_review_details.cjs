const fs = require('fs');

function main() {
  const html = fs.readFileSync('google_search_response.html', 'utf8');
  console.log('HTML Length:', html.length);
  
  const index = html.indexOf('Marketni');
  if (index !== -1) {
    console.log('Found Marketni in HTML. Snippets:');
    let pos = 0;
    let count = 0;
    while (true) {
      const matchPos = html.indexOf('Marketni', pos);
      if (matchPos === -1) break;
      console.log(`- Snippet ${count} at ${matchPos}:`, html.slice(matchPos - 50, matchPos + 150).replace(/[\r\n]+/g, ' '));
      pos = matchPos + 1;
      count++;
      if (count > 20) {
        break;
      }
    }
  } else {
    console.log('Marketni not found in raw HTML.');
  }
}

main();

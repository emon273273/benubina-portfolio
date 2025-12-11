const fs = require('fs');
const path = require('path');

function convertPage(inputPath, outputPath, pageName) {
  let content = fs.readFileSync(inputPath, 'utf8');
  
  // Remove metadata export
  content = content.replace(/export const metadata = \{[^}]+\};?\n\n/gs, '');
  
  // Replace Next.js imports
  content = content.replace(/import Link from 'next\/link';?\n?/g, "import { Link } from 'react-router-dom'\n");
  content = content.replace(/import Image from 'next\/image';?\n?/g, '');
  
  // Add React imports at the top
  if (!content.includes('useEffect')) {
    content = content.replace(/(import.*from.*\n)/, `$1import { useEffect } from 'react'\n`);
  }
  
  // Replace export default function with named function
  content = content.replace(/export default function \w+\(\)/, `function ${pageName}()`);
  
  // Replace all href= with to=
  content = content.replace(/href="/g, 'to="');
  content = content.replace(/href='/g, "to='");
  content = content.replace(/href=\{/g, 'to={');
  
  // Replace Image components with img tags
  content = content.replace(/<Image\s+([^>]*?)\/>/gs, (match, attrs) => {
    let src = attrs.match(/src=["']([^"']+)["']/)?.[1] || '';
    let alt = attrs.match(/alt=["']([^"']+)["']/)?.[1] || '';
    return `<img src="${src}" alt="${alt}" className="w-full h-full object-cover" />`;
  });
  
  // Add useEffect for document.title
  const titleMap = {
    'WhoWeAre': 'Who We Are',
    'Portfolio': 'Portfolio',
    'Contact': 'Contact'
  };
  const title = titleMap[pageName] || pageName;
  const useEffectCode = `\n  useEffect(() => {\n    document.title = '${title} - Benubina | Software Development Agency'\n  }, [])\n`;
  
  content = content.replace(/(function ${pageName}\(\) \{)/, `$1${useEffectCode}`);
  
  // Add export default at the end
  content += `\n\nexport default ${pageName}\n`;
  
  fs.writeFileSync(outputPath, content);
  console.log(`Converted ${inputPath} -> ${outputPath}`);
}

// Convert pages
const pages = [
  { input: 'app/who-we-are/page.js', output: 'src/pages/WhoWeAre.jsx', name: 'WhoWeAre' },
  { input: 'app/portfolio/page.js', output: 'src/pages/Portfolio.jsx', name: 'Portfolio' },
  { input: 'app/contact/page.js', output: 'src/pages/Contact.jsx', name: 'Contact' }
];

pages.forEach(page => {
  try {
    convertPage(page.input, page.output, page.name);
  } catch (err) {
    console.error(`Error converting ${page.input}:`, err.message);
  }
});

console.log('\nAll pages converted!');

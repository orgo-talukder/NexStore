const fs = require('fs');
const path = require('path');

const supabaseUrl = process.env.SUPABASE_URL || 'https://dhziwhuzmycpukhxbcso.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'YOUR_ANON_KEY';

const configContent = `import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.39.3/+esm';

export const supabase = createClient('${supabaseUrl}', '${supabaseKey}');
`;

if (!fs.existsSync('js')) {
    fs.mkdirSync('js');
}
fs.writeFileSync(path.join('js', 'supabase-init.js'), configContent.trim());
console.log('✅ Public Store Supabase client generated!');
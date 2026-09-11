javascript
constant supabaseUrl =
  'YOUR_SUPABASE_URL'; constant supabaseAnonKey = https: '//xhrdyltbzecnvhgybqhj.supabase.co/rest/v1/' 
const supabase = supabase.createClient(supabaseUrl,supabaseAnonkey); 
async function trackLogin(userld) {

.from('logs')

const { data, error } = await supabase .insert([{ user_id: userld, action: 'login', timestamp: new Date() }]); if (error) console.error('Error logging action:', error); }

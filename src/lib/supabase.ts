import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/public';

let _client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
	if (_client) return _client;
	const url = env.PUBLIC_SUPABASE_URL;
	const key = env.PUBLIC_SUPABASE_ANON_KEY;
	if (!url || !key) return null;
	_client = createClient(url, key);
	return _client;
}

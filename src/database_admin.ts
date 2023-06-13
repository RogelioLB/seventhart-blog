import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types/supabase";

export const supabase_admin = createClient<Database>(
    import.meta.env.PUBLIC_SUPABASE_URL,
    import.meta.env.SERVICE_ROLE_KEY
)
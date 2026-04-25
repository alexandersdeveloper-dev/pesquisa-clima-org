// Same client-side format as the original HTML: PCO-NNNNNN (6 digits).
// Will be replaced by a server-issued protocol when Supabase is wired in.
export function genProtocol() {
  return "PCO-" + Math.floor(100000 + Math.random() * 900000);
}

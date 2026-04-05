import { d as defineEventHandler, r as readBody } from '../../nitro/nitro.mjs';
import '@supabase/ssr';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'ipx';

const contact_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log("Received contact form submission:", body);
  return {
    success: true,
    message: "Thank you for your message. We will get back to you soon!"
  };
});

export { contact_post as default };
//# sourceMappingURL=contact.post.mjs.map

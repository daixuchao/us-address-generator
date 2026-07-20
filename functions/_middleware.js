export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === "www.global-address.com") {
    url.hostname = "global-address.com";
    return Response.redirect(url.toString(), 301);
  }

  if (url.pathname === "/index" || url.pathname.endsWith("/index")) {
    url.pathname = url.pathname.slice(0, -"index".length);
    return Response.redirect(url.toString(), 301);
  }

  if (url.pathname.endsWith(".html") && url.pathname !== "/baidu_verify_codeva-DlQjPzG0IB.html") {
    url.pathname = url.pathname.endsWith("/index.html")
      ? url.pathname.slice(0, -"index.html".length)
      : url.pathname.slice(0, -5);
    return Response.redirect(url.toString(), 301);
  }

  if (url.pathname === "/favicon.ico") {
    url.pathname = "/favicon.svg";
    return Response.redirect(url.toString(), 302);
  }

  if (url.pathname === "/baidu_verify_codeva-DlQjPzG0IB.html") {
    return new Response("014a7efae27d8f3a74e29d1f63f3d2b1", {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=0, must-revalidate",
      },
    });
  }

  return context.next();
}
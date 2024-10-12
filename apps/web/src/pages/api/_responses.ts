export const StatusOK = 200;
export const StatusPermanentRedirect = 301;
export const StatusTemporaryRedirect = 302;
export const StatusNotModified = 304;
export const StatusBadRequest = 400;
export const StatusUnauthorized = 401;
export const StatusForbidden = 403;
export const StatusNotFound = 404;
export const StatusInternalServerError = 500;
export const StatusNotImplemented = 501;

export function sendJSON<T extends object>(
  body?: T | null,
  init: ResponseInit = {},
) {
  const headers = new Headers(init.headers);
  headers.append("Content-Type", "application/json");

  return new Response(body && JSON.stringify(body), {
    ...init,
    headers,
  });
}

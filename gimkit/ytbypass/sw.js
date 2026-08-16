// sw.js - The Stealth Interceptor
self.addEventListener('fetch', (event) => {
    const url = event.request.url;

    // If the request is for YouTube, we "clone" it and 
    // change the headers to look like a generic data fetch
    if (url.includes('youtube.com')) {
        const modifiedRequest = new Request(event.request, {
            mode: 'cors',
            credentials: 'omit',
            headers: { 'X-Stealth-Fetch': 'true' }
        });
        event.respondWith(fetch(modifiedRequest));
    }
});
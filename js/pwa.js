// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch(function(error) {
                console.log('ServiceWorker registration failed: ', error);
            });
    });
}

// Web App Manifest
const manifest = {
    "name": "Ömer Arslan Portfolio",
    "short_name": "ÖmerPortfolio",
    "description": "Ömer Arslan's personal portfolio website",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#1f2937",
    "theme_color": "#2563eb",
    "orientation": "portrait-primary",
    "icons": [
        {
            "src": "images/shyla.png",
            "sizes": "4096x4096",
            "type": "image/png"
        },
        {
            "src": "images/shyla.png",
            "sizes": "4096x4096",
            "type": "image/png"
        }
    ]
};
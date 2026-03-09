const router = {
    init() {
        const links = document.querySelectorAll('a');

        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = e.target.href;
                const origin = location.origin;

                if (href.startsWith(origin)) {
                    router.route(href);
                }
            });
        });
    },
    async route(route) {
        window.history.pushState({ route }, null, route);

        const url = new URL(route);
        const pageDataPath = `${origin}/data${url.pathname}`.replace('.html', '.json');

        const response = await fetch(pageDataPath);
        const data = await response.json();

        const rootElement = document.querySelector('main');
        const template = document.createElement('template');
        template.innerHTML = data.content;

        console.log(template.content.cloneNode(true));
        rootElement.innerHTML = '';
        rootElement.appendChild(template.content.cloneNode(true));
        console.log(rootElement.innerHTML);
        console.log(data.content);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    router.init();
});

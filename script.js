document.addEventListener("DOMContentLoaded", () => {
    try {
        injectNavbar();
    } catch (e) {
        console.error("Navbar failed to inject:", e);
    }
});

//inject navbar
function injectNavbar() {
    const navElement = document.querySelector("nav");
    if (!navElement) return; 

    const path = window.location.pathname;
    
    let segments = path.split('/').filter(s => s.length > 0);
    
    if (segments[0] === 'kurone741.github.io') {
        segments.shift();
    }

    if (segments.length > 0 && segments[segments.length - 1].includes('.html')) {
        segments.pop();
    }

    const depth = segments.length;
    const prefix = "../".repeat(depth);

    navElement.innerHTML = `
         <aside class="navbar">
	<a href="/">home</a>
	<a href="/logs">logs</a>
	<a href="/projects">projects</a>
	<a href="/photos">photos</a>
	<a href="/music">music</a>
        <a href="/links">links</a>
</aside>
    `;
}

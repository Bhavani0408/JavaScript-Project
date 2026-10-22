const footer = document.querySelector('footer p');

if (footer) {
    footer.textContent =
        `© ${new Date().getFullYear()} Bhavani S | My Portfolio`;
}

console.log("Footer found:", footer);
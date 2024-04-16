document.querySelectorAll("*").forEach(function(node) {
    if (getComputedStyle(node).fontFamily.toLowerCase().includes("mono")) {
        node.style.setProperty("font-family", "monospace", "important");
    }
});
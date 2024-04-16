let selectors = [];
let pattern = /font-family:[\s\w]*mono/i;

for (const style of document.styleSheets) {
  for (const rule of style.cssRules) {
    if (pattern.test(rule.cssText)) {
      selectors.push(rule.selectorText);
    }
  }
}

for (let node of document.querySelectorAll(selectors.join(","))) {
	node.style.setProperty("font-family", "monospace", "important");
}

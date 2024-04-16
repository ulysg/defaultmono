let root_style = getComputedStyle(document.querySelector(":root"));
let selectors = [];

let ff_pattern = /font-family:/;
let mono_pattern = /mono/i;
let var_pattern = /var\((.+)\)/; 

for (const style of document.styleSheets) {
  for (const rule of style.cssRules) {
    if (ff_pattern.test(rule.cssText)) {
      if (mono_pattern.test(rule.cssText)) {
        selectors.push(rule.selectorText);
        continue;
      }
      
      let match = rule.cssText.match(var_pattern);

      if (match.length > 1) {
        let var_value = root_style.getPropertyValue(match[1]);

        if (mono_pattern.test(var_value)) {
          selectors.push(rule.selectorText);
        }
      }
    }
  }
}

for (let node of document.querySelectorAll(selectors.join(","))) {
  node.style.setProperty("font-family", "monospace", "important");
}

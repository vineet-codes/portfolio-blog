// rehype-highlight-code.js
const rangeParser = require('parse-numeric-range');
const visit = require('unist-util-visit');
const nodeToString = require('hast-util-to-string');
const refractor = require('refractor');
const highlightLine = require('./rehype-highlight-line.js');
const highlightWord = require('./rehype-highlight-word.js');

module.exports = (options = {}) => {
  return (tree) => {
    visit(tree, 'element', visitor);
  };

  function visitor(node, index, parentNode) {
    if (parentNode.tagName === 'pre' && node.tagName === 'code') {
      // syntax highlight
      const lang = node.properties.className
        ? node.properties.className[0].split('-')[1]
        : 'md';
      let result = refractor.highlight(nodeToString(node), lang);

      // line highlight
      const linesToHighlight = rangeParser(node.properties.line || '0');
      result = highlightLine(result, linesToHighlight);

      // word highlight
      result = highlightWord(result);

      node.children = result;
    }
  }
};

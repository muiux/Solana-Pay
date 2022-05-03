exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");

exports.widget = require("../lib/cjs").default
exports.button = require("../lib/cjs").StablePayButton

// buffer of DOM elements rendering React components
var nodes = [];

// utility to mount React nodes to target DOM elements
exports.ReactContentRenderer = {
  unmountAll: function() {
    if (nodes.length === 0) {
      return;
    }
    nodes.forEach(node => React.unmountComponentAtNode(node));
    nodes = [];
  },
  unmount: function(node) {
    React.unmountComponentAtNode(node)
  },
  /**
   * Creates, renders and returns a React element created
   * from component class using given props and rendered
   * into the targetNode.
   */
  render: function(component, props, targetNode, callback) {
    var reactElement = React.createElement(component, props, null);
    ReactDOM.render(reactElement, targetNode, callback);
    nodes.push(targetNode);
    return reactElement;
  }
};

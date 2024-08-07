// This shows the HTML page in "ui.html"
figma.showUI(__html__);

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message
figma.ui.onmessage =  (msg: {type: string}) => {

  // Make sure to close the plugin when you're done
  figma.closePlugin();
};

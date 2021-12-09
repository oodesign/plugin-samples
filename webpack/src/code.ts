import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5gyr-paW_ZAOGQHiStx-7KyyXDNhms3I",
  authDomain: "md-license-manager.firebaseapp.com",
  databaseURL: "https://md-license-manager-default-rtdb.firebaseio.com",
  projectId: "md-license-manager",
  storageBucket: "md-license-manager.appspot.com",
  messagingSenderId: "501765483850",
  appId: "1:501765483850:web:a2dc44979f33ae31b7e5b3",
  measurementId: "G-W3SZL8VP8K"
};

figma.showUI(__html__)

figma.ui.onmessage = msg => {
  if (msg.type === 'create-rectangles') {
    const nodes = []

    for (let i = 0; i < msg.count; i++) {
      const rect = figma.createRectangle()
      rect.x = i * 150
      rect.fills = [{type: 'SOLID', color: {r: 1, g: 0.5, b: 0}}]
      figma.currentPage.appendChild(rect)
      nodes.push(rect)
    }

    figma.currentPage.selection = nodes
    figma.viewport.scrollAndZoomIntoView(nodes)
  }

  figma.closePlugin()
}

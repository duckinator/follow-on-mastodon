let parseURI = (uri) => {
  let anchor = document.createElement("a");
  anchor.setAttribute("href", uri);
  return anchor;
}

let usernameFromUrl = (url) => {
  let uri = parseURI(url);
  return uri.pathname.split("/")[1].split("@")[1] + "@" + uri.hostname;
}

let followUrl = (domain, username) =>
  "https://" + domain + "/authorize_interaction?uri=" + username;

browser.tabs.query({currentWindow: true, active: true}).then(tabs => {
  let tab = tabs[0];
  let instance = browser.storage.local.get('instance');

  let url = followUrl(instance, usernameFromUrl(tab.url));

  // TODO: Can this be made to just not open a popup, so the window.close()
  //       can be removed?
  browser.tabs.update(tab.id, {"url": url}).then(tab => window.close());
});

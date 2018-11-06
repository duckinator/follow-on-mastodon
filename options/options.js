(function () {
  let instance = document.getElementById('mastodon-instance');
  let form = document.getElementById('follow-on-mastodon-options');

  let saveOptions = (e) => {
    browser.storage.local.set({instance: instance.value});
    e.preventDefault();
  };

  let loadOptions = () => {
    var storageItem = browser.storage.local.get('instance');
    storageItem.then((res) => { instance.value = res.instance; });
  };

  document.addEventListener('DOMContentLoaded', loadOptions);
  document.querySelector("form").addEventListener("submit", saveOptions);
})()

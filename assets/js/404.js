
const currentUrl = window.location.href;

function createLink(checkUrl, redirectUrl){
  if (currentUrl == checkUrl){
    location.replace(redirectUrl)
  }
}

createLink("https://stuffzez.github.io/learn/l11001", "https://stuffzez.github.io/Coding/learn/l1001")
export const getCookie = (cookieName) => {
  let cookieToFind = cookieName + "=";
  let decodedCookies = decodeURIComponent(document.cookie);
  let cookiesArray = decodedCookies.split(';');
  for(let i = 0; i <cookiesArray.length; i++) {
    let cookie = cookiesArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieToFind) === 0) {
      return cookie.substring(cookieToFind.length, cookie.length);
    }
  }
  return "";
}

export const setCookie = (cookieName, cookieValue, cookieLifeDays) => {
  const dateObj = new Date();
  dateObj.setTime(dateObj.getTime() + (cookieLifeDays*24*60*60*1000));
  let expirationDate = "expires="+ dateObj.toUTCString();
  document.cookie = cookieName + "=" + cookieValue + ";" + expirationDate + ";path=/";
}

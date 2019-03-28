let dayOfWeek = (ts) => {
  let d = new Date(ts * 1000);
  return d.toLocaleDateString(window.navigator.language, {weekday: 'long'});
};
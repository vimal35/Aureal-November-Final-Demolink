// Lets plain click handlers change page through the router, without reloading the whole site.
let navigateFn = null;

export const setNavigate = (fn) => {
  navigateFn = fn;
};

export const goTo = (path) => {
  if (navigateFn) navigateFn(path);
  else window.location.assign(path);
};

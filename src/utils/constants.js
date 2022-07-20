const defaultCurrentUser = {
  isLoggedIn: false,
  data: {
    name: undefined,
  },
};

const fakeCurrentUser = {
  isLoggedIn: true,
  data: {
    name: 'Pavel Lantsman',
  },
};

export {
  defaultCurrentUser,
  fakeCurrentUser,
};

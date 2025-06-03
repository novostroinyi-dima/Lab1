const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('form toggle', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    // Reset modules to ensure event listeners are reattached
    jest.resetModules();
    require('../script.js');
  });

  test('sign-up link toggles active class on wrapper', () => {
    const wrapper = document.querySelector('.wrapper');
    const signUpLink = document.querySelector('.signUpBtn-link');
    expect(wrapper.classList.contains('active')).toBe(false);
    signUpLink.click();
    expect(wrapper.classList.contains('active')).toBe(true);
  });
});

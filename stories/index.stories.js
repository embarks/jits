import { configure } from '@storybook/react';
import '../lib/index.scss';
const req = require.context('../lib', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
import './app.scss'

import glightbox from './js/glightbox'
import header from './js/header'

glightbox();
header();

if (module.hot) {
  module.hot.accept();
}

'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('plug-and-play')
      .service('myService')
      .getWelcomeMessage();
  },
});

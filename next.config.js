const { nextI18NextRewrites } = require("next-i18next/rewrites");

const localeSubpaths = {
  vn: "vn",
  jp: "jp",
};

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
};

const { getDefaultConfig } = require('expo/metro-config'); // If using Expo
// const { getDefaultConfig } = require('metro-config'); // If not using Expo

module.exports = (async () => {
  const config = getDefaultConfig(__dirname);
 
  config.transformer = {
    ...config.transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
    assetPlugins: ["expo-asset/tools/hashAssetFiles"],
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  };

  config.resolver = {
    ...config.resolver,
    assetExts: config.resolver.assetExts.filter((ext) => ext !== 'svg','png'),
    sourceExts: [...config.resolver.sourceExts, 'svg', 'd.ts','png'],
  };
  return config;
})();


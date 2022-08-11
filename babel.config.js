module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // add nothing below this line
    plugins: ['react-native-reanimated/plugin'], 
  };
};

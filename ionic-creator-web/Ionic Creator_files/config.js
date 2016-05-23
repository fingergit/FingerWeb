angular.module('ionic.creator').config(['ConfigProvider', '$compileProvider', function(Config, $compileProvider) {
  Config.init({
    'creator_api_url': 'https://creator.ionic.io/api/v1',
    'api_url': 'https://apps.ionic.io/api/v1',
    'root_url': 'https://creator.ionic.io',
    'debug_mode': false
  });

  $compileProvider.debugInfoEnabled(Config.get('debug_mode'));
}]);

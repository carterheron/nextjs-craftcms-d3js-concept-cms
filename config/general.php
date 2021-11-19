<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see craft\config\GeneralConfig
 */

return [
    '*' => [
        'defaultWeekStartDay' => 0,
        'omitScriptNameInUrls' => true,
        "useEmailAsUsername" => true,
        'cpTrigger' => 'admin',
        'securityKey' => getenv('SECURITY_KEY'),
        'useEmailAsUsername' => true,
        'baseCpUrl' => getenv('DEFAULT_SITE_URL'),
        'disallowRobots' => false,
        'headlessMode' => true,
        'enableGraphqlCaching' => true
    ],
    'staging' => [
        'devMode' => true,
        'disallowRobots' => true,
    ],
    'dev' => [
        'allowAdminChanges' => true,
        'enableTemplateCaching' => false,
        'devMode' => true,
        'disallowRobots' => true,
    ],
];
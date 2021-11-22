<?php

/**
 * Yii Application Config
 *
 * Edit this file at your own risk!
 *
 * The array returned by this file will get merged with
 * vendor/craftcms/cms/src/config/app.php and app.[web|console].php, when
 * Craft's bootstrap script is defining the configuration for the entire
 * application.
 *
 * You can define custom modules and system components, and even override the
 * built-in system components.
 *
 * If you want to modify the application config for *only* web requests or
 * *only* console requests, create an app.web.php or app.console.php file in
 * your config/ folder, alongside this one.
 */

use craft\helpers\App;
use craft\mail\transportadapters\Smtp;
use craft\queue\Queue;

return [
    '*' => [
        'components' => [
            'queue' => [
                'class' => Queue::class,
                'ttr' => 15 * 60,
            ],
            // Default to database 0, so PHP sessions are in a separate database
            'redis' => [
                'class' => yii\redis\Connection::class,
                'hostname' => getenv('REDIS_HOST'),
                'port' => getenv('REDIS_PORT'),
                'database' => getenv('REDIS_DB'),
            ],
            'cache' => [
                // Use database 1 for live production
                'class' => yii\redis\Cache::class,
                'redis' => [
                    'hostname' => getenv('REDIS_HOST'),
                    'port' => getenv('REDIS_PORT'),
                    'database' => getenv('REDIS_DB'),
                ],
            ],
            'session' => function () {
                $stateKeyPrefix = md5('Craft.' . craft\web\Session::class . '.' . Craft::$app->id);
                /** @var yii\redis\Session $session */
                $session = Craft::createObject([
                    'class' => yii\redis\Session::class,
                    'flashParam' => $stateKeyPrefix . '__flash',
                    'name' => Craft::$app->getConfig()->getGeneral()->phpSessionName,
                    'cookieParams' => Craft::cookieConfig(),
                ]);
                $session->attachBehaviors([craft\behaviors\SessionBehavior::class]);
                return $session;
            },
        ],
        'id' => App::env('APP_ID') ?: 'CraftCMS',
        'modules' => [
            'my-module' => \modules\Module::class,
        ],
        //'bootstrap' => ['my-module'],
    ],
    'local' => [
        'components' => [
            'deprecator' => [
                'throwExceptions' => getenv('DEV_MODE'),
            ],
            'mailer' => static function() {
                $settings = App::mailSettings();

                $settings->transportType = Smtp::class;

                $settings->transportSettings = [
                    'host' => getenv('SMTP_HOST'),
                    'port' => getenv('SMTP_PORT'),
                    'username' => getenv('SMTP_USERNAME'),
                    'password' => getenv('SMTP_PASSWORD'),
                    'useAuthentication' => true,
                ];

                $config = App::mailerConfig($settings);

                try
                {
                    return Craft::createObject($config);
                }
                catch(Exception $exception)
                {
                    return null;
                }
            }
        ]
    ]
];
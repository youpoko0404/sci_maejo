To Install after cloning the repo

1. > composer install
2. > npm install

3. > cp .env.example .env
4. edit file ".env"

    Optional
    ------------------------------------------------------------------
    APP_URL=[http://localhost or YOUR_URL i.e. 'http://test.local]
    SESSION_DOMAIN=[localhost or YOUR_URL i.e. .test.local]
    ------------------------------------------------------------------

    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=[YOUR_DB_NAME]
    DB_USERNAME=[YOUR_DB_USERNAME]
    DB_PASSWORD=[YOUR_DB_PASSWORD]

5. > php artisan key:generate
6. > php aritsan serve
7. > npm run watch

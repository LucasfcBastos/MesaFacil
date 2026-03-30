
cd backend/

composer install

composer require laravel/sanctum

composer require intervention/image

php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"

php artisan migrate:fresh --seed

php artisan serve

==========================================

cd frontend/

npm install react-router-dom axios react-input-mask react-imask

npm run dev
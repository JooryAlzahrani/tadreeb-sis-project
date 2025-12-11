FROM php:apache

# installs pdo_mysql so that php can connect to mysql database
RUN docker-php-ext-install pdo pdo_mysql

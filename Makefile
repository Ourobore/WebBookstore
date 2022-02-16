# Juste a little Makefile to easily manipulate docker-compose

all: up

build:
	-docker-compose build

up:
	-docker-compose up -V 

down:
	-docker-compose down -v

start:
	-docker-compose start

stop:
	-docker-compose stop

###

ps:
	-docker-compose ps

images:
	-docker-compose images

###

api:
	-cd backend && npm start

dev:
	-cd backend && npm run start:dev
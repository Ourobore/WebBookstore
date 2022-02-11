# Juste a little Makefile to easily manipulate docker-compose

all: up dev

up:
	-docker-compose up -d -V

stop:
	-docker-compose stop

down:
	-docker-compose down -v

api:
	-cd backend && npm start

dev:
	-cd backend && npm run start:dev
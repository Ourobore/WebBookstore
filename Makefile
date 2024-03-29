# Juste a little Makefile to easily manipulate docker-compose and dev environment

### Dev environment ###
dev: database backend frontend

frontend:
	-zsh && cd frontend && npm run dev

backend: database
	-zsh && cd backend && npm run start:dev

database:
	-docker-compose up -d postgres pgadmin


### Prod environment ###
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


.PHONY: frontend backend

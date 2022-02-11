# Juste a little Makefile to easily manipulate docker-compose

all: up

up:
	-docker-compose up -d

stop:
	-docker-compose stop

down:
	-docker-compose down
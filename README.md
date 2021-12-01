# Getir Node.js Bootcamp | Week-3

This repo was created for homework of Getir Node.js Bootcamp week-3.

## API Endpoints

### Users

| Route | HTTP Verb | Request Body | Header Body | Description |
| --- | --- | --- | --- | --- |
| /users | `GET` | Empty | Authentication: Bearer Token | Returns resource |
| /users/:id | `GET` | Empty | Authentication: Bearer Token | Returns resource |
| /users | `POST` | `{ name: "Jone Doe", username: "jonedoe", email: "jonedoe@gmail.com" }`  | Authentication: Bearer Token | Returns created resource or error message |`
| /users/:id | `PUT` | `{ name: "Jone Doe", username: "jonedoe", email: "jonedoe@gmail.com" }`  | Authentication: Bearer Token | Returns updated resource or error message |`
| /users/:id | `PATCH` | `{ name: "Jone Doe", username: "jonedoe", email: "jonedoe@gmail.com" }`  | Authentication: Bearer Token | Returns updated resource or error message |`
| /users/:id | `DELETE` | Empty | Authentication: Bearer Token | Returns status of destroying |`

## Installation

Clone the source code:

    git clone git@github.com:toptaskalender/*

Install dependencies:

    npm install

## Starting the app

Run `npm start` to start the application.

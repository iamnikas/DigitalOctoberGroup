# Nuxt.js TodoMVC Example

> Nuxt.js is a framework for building Universal Vue.js Applications.

## Setup

```bash
# install dependencies
npm install

# serve in dev mode, with hot reload at localhost:3000
npm start

# or:
npm run dev



# build for production
npm run build

```

## Description

Сервис новостей построеный на Vue.Js + Node.Js Express. Имеет 2 страницы: список новостей и шаблон одной новости.
Все данные собираются с API двумя методами:

```bash
# GetAll News
/GET http://localhost:3000/news

# GetOne Item News
/GET http://localhost:3000/news/get/:news_id

Example:
/GET http://localhost:3000/news/get/13

```
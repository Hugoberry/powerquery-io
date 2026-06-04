---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Імпорт інформації з бази даних Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Повертає таблицю зі списком таблиць у кластері Amazon Redshift `server` у базі даних `database`. Можна вказати необов’язковий параметр запису `options` щоб керувати вказаними нижче параметрами:

-   `Provider Name`: текстове значення, яке потрібно використовувати як ім’я постачальника для підключення. Використовується під час застосування Microsoft Authentication.
-   `Batch Size` (розмір пакета): кількість рядків, отриманих під час одного виклику сервера.


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```




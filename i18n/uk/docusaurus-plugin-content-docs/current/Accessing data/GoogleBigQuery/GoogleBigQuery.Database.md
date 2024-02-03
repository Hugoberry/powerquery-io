---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


## Description

Імпорт даних із бази даних Google BigQuery.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Details

      Повертає таблицю зі списком доступних проектів у Google BigQuery. Можна вказати додатковий параметр запису <code>options</code>, щоб керувати наведеними нижче параметрами.      <ul>        <li><code>ConnectionTimeout</code>: параметр тривалості, який визначає, як довго очікувати підключення до сервера, перш ніж перервати спробу. Стандартне значення дорівнює часу очікування підключення ODBC.</li>        <li><code>CommandTimeout</code>: параметр тривалості, який визначає, як довго дозволено працювати запиту на боці сервера до скасування.</li>        <li><code>BillingProject</code>: ідентифікатор проекту для виставлення рахунків. За замовчуванням використовується ім’я першого доступного проекту.</li>        <li><code>UseStorageApi</code>: указує, чи слід використовувати API сховища BigQuery для великих наборів результатів. За замовчування для використання API сховища встановлено значення true. Щоб не використовувати API сховища, установіть значення false </li>      </ul>    Параметр запису вказується так: [параметр1 = значення1, параметр2 = значення2…].    


## Examples

### Example #1 
Створити список доступних проектів у Google BigQuery
```powerquery
GoogleBigQuery.Database()
```




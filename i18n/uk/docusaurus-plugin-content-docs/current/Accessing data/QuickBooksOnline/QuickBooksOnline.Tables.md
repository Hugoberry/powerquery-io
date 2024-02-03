---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


## Description

Імпорт даних зі служби QuickBooks Online.


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Details

        Повертає таблицю зі списком доступних таблиць у QuickBooks Online. Можна вказати додатковий параметр запису <code>options</code>, щоб керувати наведеними нижче параметрами.          <ul>            <li><code>ConnectionTimeout</code>: параметр тривалості, який визначає, як довго очікувати на підключення до сервера, перш ніж перервати спробу.</li>            <li><code>CommandTimeout</code>: параметр тривалості, який визначає, як довго дозволено працювати запиту на боці сервера до скасування.</li>          </ul>        Параметр запису вказується так: [параметр1 = значення1, параметр2 = значення2…].    



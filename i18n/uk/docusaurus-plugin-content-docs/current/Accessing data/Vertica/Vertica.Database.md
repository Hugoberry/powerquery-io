---
title: Vertica.Database
---

# Vertica.Database


## Description

Імпорт даних із Vertica.


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Повертає таблицю схем, доступних на сервері (ім’я зазначається параметром <code>server</code>) у базі даних (ім’я зазначається параметром <code>database</code>).Можна вказати додатковий параметр запису <code>options</code>, щоб визначити додаткові властивості. Запис може містити описані нижче поля.<ul>    <li><code>ConnectionTimeout</code>: параметр тривалості, який визначає, як довго очікувати на підключення до сервера, перш ніж перервати спробу. Стандартне значення залежить від драйвера.</li>    <li><code>CommandTimeout</code>: параметр тривалості, який визначає, як довго запиту на боці сервера дозволено працювати до скасування. Стандартне значення залежить від драйвера.</li></ul>


## Examples

### Example #1 
Створення списку таблиць у Vertica.
```powerquery

```




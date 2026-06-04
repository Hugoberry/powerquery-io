---
title: Snowflake.Databases
---

# Snowflake.Databases


Імпорт даних зі сховища Snowflake Computing.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

Повертає таблицю зі списком таблиць зі сховища даних Snowflake Computing `warehouse` на сервері `server`. Додатковий параметр запису `options` дає змогу керувати наведеними нижче параметрами.

-   `Role` – текстове значення, яке слугує назвою ролі для підключення.
-   `CreateNavigationProperties` – логічне значення (true або false), за яким визначається, чи створювати для повернених значень властивості навігації (стандартне значення – true).
-   `ConnectionTimeout` – тривалість очікування відповіді серверів Snowflake у секундах.
-   `CommandTimeout` – тривалість очікування виконання запиту в секундах.


## Examples

### Example #1
Перелічіть таблиці в сховищі даних Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```




---
title: Snowflake.Databases
---

# Snowflake.Databases


## Description

Імпорт даних зі сховища Snowflake Computing.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Details

Повертає таблицю зі списком таблиць зі сховища даних Snowflake Computing <code>warehouse</code> на сервері <code>server</code>. Додатковий параметр запису <code>options</code> дає змогу керувати наведеними нижче параметрами.<ul><li><code>Role</code> – текстове значення, яке слугує назвою ролі для підключення.</li><li><code>CreateNavigationProperties</code> – логічне значення (true або false), за яким визначається, чи створювати для повернених значень властивості навігації (стандартне значення – true).</li><li><code>ConnectionTimeout</code> – тривалість очікування відповіді серверів Snowflake у секундах.</li><li><code>CommandTimeout</code> – тривалість очікування виконання запиту в секундах.</li></ul>    


## Examples

### Example #1 
Перелічіть таблиці в сховищі даних Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```




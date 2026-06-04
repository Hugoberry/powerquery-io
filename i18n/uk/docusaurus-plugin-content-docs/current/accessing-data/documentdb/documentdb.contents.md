---
title: DocumentDB.Contents
---

# DocumentDB.Contents


Введіть URL-адресу облікового запису Azure Cosmos DB.


## Syntax

```powerquery
DocumentDB.Contents(
    url as text,
    optional database as text,
    optional collection as text,
    optional options as record
) as table
```


## Remarks

Повертає таблицю баз даних Azure Cosmos DB за адресою `url`. Якщо вказано значення параметра `database`, натомість повертається таблиця колекцій. Крім того, якщо в записі `options` указано поле `Query`, повертаються результати запиту, застосованого до вказаної бази даних і/або колекції.



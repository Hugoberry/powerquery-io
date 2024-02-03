---
title: DocumentDB.Contents
---

# DocumentDB.Contents


## Description

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


## Details

Повертає таблицю баз даних Azure Cosmos DB за адресою <code>url</code>. Якщо вказано значення параметра <code>database</code>, натомість повертається таблиця колекцій. Крім того, якщо в записі <code>options</code> указано поле <code>Query</code>, повертаються результати запиту, застосованого до вказаної бази даних і/або колекції.



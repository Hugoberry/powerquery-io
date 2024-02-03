---
title: DocumentDB.Contents
---

# DocumentDB.Contents


## Description

Введите URL-адрес учетной записи Azure Cosmos DB.


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

Возвращает таблицу баз данных Azure Cosmos DB по адресу <code>url</code>. Если указана база данных <code>database</code>, вместо этого будет возвращаться таблица коллекций. Кроме того, если поле <code>Query</code> указано в записи <code>options</code>, будут возвращаться результаты запросов, которые выполняются для указанной базы данных или коллекции.



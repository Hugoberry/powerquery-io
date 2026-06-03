---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Импорт данных из базы данных Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Возвращает таблицу с перечислением таблиц на сервере `server` кластера Amazon Redshift в базе данных `database`. Необязательный параметр записи (`options`) может быть указан для управления следующими параметрами:

-   `Имя поставщика`: текстовое значение, используемое в качестве имени поставщика для подключения. Используется при использовании аутентификации Майкрософт.
-   `Размер пакета`: число строк, извлекаемых за один вызов сервера.


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```




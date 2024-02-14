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

Возвращает таблицу с перечислением таблиц на сервере <code>server</code> кластера Amazon Redshift в базе данных <code>database</code>. Необязательный параметр записи <code>options</code> можно указать для управления следующими параметрами:<ul><li><code>Provider Name</code>: текстовое значение, используемое в качестве имени поставщика для подключения. Используется при использовании проверки подлинности Майкрософт.</li><li><code>Batch Size</code>: количество строк, извлекаемых в одном вызове сервера.</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```




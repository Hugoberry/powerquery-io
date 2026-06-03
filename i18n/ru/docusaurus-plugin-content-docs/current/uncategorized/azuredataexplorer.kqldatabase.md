---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


Импорт данных из кластера Fabric Kusto в режиме обнаружения.


## Syntax

```powerquery
AzureDataExplorer.KqlDatabase(
    optional cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Remarks

Импортирует данные из экземпляра базы данных KQL


## Examples

### Example #1
Возвращает таблицу сведений о событиях Storm
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Таблица событий Storm из базы данных "Samples" в кластере "help"
```




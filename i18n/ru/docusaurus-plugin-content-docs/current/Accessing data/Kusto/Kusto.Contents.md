---
title: Kusto.Contents
---

# Kusto.Contents


## Description

Импортирует данные из Azure Data Explorer (Kusto).


## Syntax

```powerquery
Kusto.Contents(
    cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Details

Импортирует данные из вашего экземпляра Azure Data Explorer (Kusto).


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




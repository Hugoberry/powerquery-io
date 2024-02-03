---
title: Kusto.Contents
---

# Kusto.Contents


## Description

Імпортує дані з Azure Data Explorer (Kusto).


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

Імпортує дані з вашого екземпляра Azure Data Explorer (Kusto).


## Examples

### Example #1 
Повертає таблицю з відомостями про бурі
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Таблиця з відомостями про бурі з бази даних "Samples" у кластері "help"
```




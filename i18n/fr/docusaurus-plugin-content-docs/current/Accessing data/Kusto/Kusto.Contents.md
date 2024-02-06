---
title: Kusto.Contents
---

# Kusto.Contents


Importe des données à partir d&#39;Azure Data Explorer (Kusto)


## Syntax

```powerquery
Kusto.Contents(
    cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Remarks

Importe des données à partir de votre instance Azure Data Explorer (Kusto)


## Examples

### Example #1 
Retourne une table d&#39;informations sur les événements Storm
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Table avec des événements Storm provenant de la base de données « Samples » dans le cluster « help »
```




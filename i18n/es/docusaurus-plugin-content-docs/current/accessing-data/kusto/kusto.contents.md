---
title: Kusto.Contents
---

# Kusto.Contents


Importa datos de Azure Data Explorer (Kusto).


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

Importa datos de una instancia de Azure Data Explorer (Kusto).


## Examples

### Example #1 
Devuelve una tabla de información sobre Storm Events
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Una tabla que contiene Storm Events de la base de datos "Samples" del clúster "help".
```




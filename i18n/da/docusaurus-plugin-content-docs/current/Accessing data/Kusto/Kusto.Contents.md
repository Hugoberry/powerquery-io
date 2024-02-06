---
title: Kusto.Contents
---

# Kusto.Contents


Importerer data fra Azure Data Explorer (Kusto)


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

Importerer data fra din forekomst af Azure Data Explorer (Kusto)


## Examples

### Example #1 
Returnerer en tabel med Storm-hændelsesoplysninger
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
En tabel med Storm-hændelser fra databasen "Prøver" i klyngen "Hjælp"
```




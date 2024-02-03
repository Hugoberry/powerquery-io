---
title: AzureDataExplorer.Contents
---

# AzureDataExplorer.Contents


## Description

Importerer data fra Azure Data Explorer (Kusto)


## Syntax

```powerquery
AzureDataExplorer.Contents(
    cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Details

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




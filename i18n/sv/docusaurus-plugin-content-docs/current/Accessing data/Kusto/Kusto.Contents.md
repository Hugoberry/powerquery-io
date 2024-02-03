---
title: Kusto.Contents
---

# Kusto.Contents


## Description

Importerar data från Azure Data Explorer (Kusto)


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

Importerar data från din Azure Data Explorer-instans (Kusto)


## Examples

### Example #1 
Returnerar en tabell med Storm Events-information
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
En tabell med Storm-händelser från databasen Exempel i klustret Hjälp
```




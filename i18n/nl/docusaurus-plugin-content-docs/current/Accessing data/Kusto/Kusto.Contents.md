---
title: Kusto.Contents
---

# Kusto.Contents


## Description

Hiermee worden gegevens uit Azure Data Explorer (Kusto) geïmporteerd


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

Hiermee worden gegevens uit uw Azure Data Explorer-instantie (Kusto) geïmporteerd


## Examples

### Example #1 
Hiermee wordt een tabel met Storm Events-gegevens geretourneerd
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Een tabel met Storm-gebeurtenissen uit de Samples-database in het helpcluster
```




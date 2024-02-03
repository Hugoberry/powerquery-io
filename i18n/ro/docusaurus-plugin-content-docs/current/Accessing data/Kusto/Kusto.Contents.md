---
title: Kusto.Contents
---

# Kusto.Contents


## Description

Importă date din Azure Data Explorer (Kusto)


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

Importă date de la instanța Azure Data Explorer (Kusto)


## Examples

### Example #1 
Returnează un tabel de informații de evenimente Storm
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Un tabel cu evenimente Storm din baza de date „Eșantioane” din clusterul „ajutor”
```




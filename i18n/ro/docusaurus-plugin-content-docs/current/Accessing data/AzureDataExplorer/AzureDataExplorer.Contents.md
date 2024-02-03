---
title: AzureDataExplorer.Contents
---

# AzureDataExplorer.Contents


## Description

Importă date din Explorator date Azure (Kusto)


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




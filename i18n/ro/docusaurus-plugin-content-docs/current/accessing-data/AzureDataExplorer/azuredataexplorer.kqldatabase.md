---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


Importați datele din clusterul Fabric Kusto în modul descoperire.


## Syntax

```powerquery
AzureDataExplorer.KqlDatabase(
    optional cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Remarks

Importă datele din instanța bazei de date KQL


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




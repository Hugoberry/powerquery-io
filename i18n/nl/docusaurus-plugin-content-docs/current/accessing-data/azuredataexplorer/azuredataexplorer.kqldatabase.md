---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


Importeer gegevens uit het Fabric Kusto-cluster in de detectiemodus.


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

Hiermee worden gegevens uit uw KQL-database-instantie geïmporteerd


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




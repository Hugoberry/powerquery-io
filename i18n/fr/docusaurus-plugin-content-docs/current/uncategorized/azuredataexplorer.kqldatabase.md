---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


Importer des données à partir du cluster Fabric Kusto en mode de découverte.


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

Importe des données à partir de votre instance de base de données KQL


## Examples

### Example #1
Retourne une table d'informations sur les événements Storm
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Table avec des événements Storm provenant de la base de données « Samples » dans le cluster « help »
```




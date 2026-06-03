---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


Importe datos del clúster de Fabric Kusto en modo de detección.


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

Importa datos de la instancia de KQL Database


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




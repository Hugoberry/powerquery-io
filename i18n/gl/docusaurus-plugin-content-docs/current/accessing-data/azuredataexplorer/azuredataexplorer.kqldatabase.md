---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


Importar datos do clúster de Fabric Kusto en modo de descubrimento.


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

Importa datos da instancia de base de datos KQL


## Examples

### Example #1
Devolve información dunha táboa de eventos de tormenta
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Unha táboa con Storm Events da base de datos "Samples" no clúster "help".
```




---
title: AzureDataExplorer.Contents
---

# AzureDataExplorer.Contents


## Description

Importa datos desde Azure Datos Explorer (Kusto)


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

Importa datos da instancia de Azure Data Explorer (Kusto).


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




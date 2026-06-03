---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


Importare i dati dal cluster Fabric Kusto in modalità di individuazione.


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

Importa i dati dall'istanza del database KQL


## Examples

### Example #1
Restituisce una tabella di informazioni Storm Events
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Tabella contenente Storm Events del database "Samples" nel cluster "help"
```




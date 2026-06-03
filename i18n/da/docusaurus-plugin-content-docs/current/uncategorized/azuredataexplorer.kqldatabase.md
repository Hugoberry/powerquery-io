---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


Importér data fra Fabric Kusto-klyngen i registreringstilstand.


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

Importerer data fra din KQL-database-forekomst


## Examples

### Example #1
Returnerer en tabel med Storm-hændelsesoplysninger
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
En tabel med Storm-hændelser fra databasen "Prøver" i klyngen "Hjælp"
```




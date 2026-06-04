---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


Importera data från Fabric Kusto-klustret i identifieringsläge.


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

Importerar data från din KQL-databasinstans


## Examples

### Example #1
Returnerar en tabell med Storm Events-information
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
En tabell med Storm-händelser från databasen Exempel i klustret Hjälp
```




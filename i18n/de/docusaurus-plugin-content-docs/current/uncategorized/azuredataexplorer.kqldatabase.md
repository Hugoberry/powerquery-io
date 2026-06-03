---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


Importieren Sie Daten aus dem Fabric-Kusto-Cluster im Ermittlungsmodus.


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

Importiert Daten aus Ihrer KQL-Datenbank-Instanz


## Examples

### Example #1
Gibt eine Tabelle mit Storm Events-Informationen zurück.
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Eine Tabelle mit Storm-Ereignissen aus der Datenbank "Samples" im Cluster "help"
```




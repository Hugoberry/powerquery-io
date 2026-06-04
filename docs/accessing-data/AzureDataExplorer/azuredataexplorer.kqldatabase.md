---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


Import data from Fabric Kusto cluster in discovery mode.


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

Imports data from your KQL Database instance


## Examples

### Example #1
Returns a table of Storm Events information
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
A table with Storm Events from the "Samples" database in the "help" cluster
```




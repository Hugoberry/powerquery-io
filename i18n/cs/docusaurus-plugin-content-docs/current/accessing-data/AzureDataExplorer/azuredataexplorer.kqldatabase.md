---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


Umožňuje importovat data z clusteru Fabric Kusto v režimu zjišťování.


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

Importuje data z instance databáze KQL.


## Examples

### Example #1
Vrátí tabulku informací o událostech Storm.
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Tabulka s událostmi Storm Events z databáze „Samples“ v clusteru „help“
```




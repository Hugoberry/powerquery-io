---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


Uvozite podatke iz gruče Kusto storitve Fabric v načinu odkrivanja.


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

Uvozite podatke iz svojega primerka zbirke podatkov KQL


## Examples

### Example #1
Vrne tabelo z informacijami o dogodkih Storm
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Tabela z dogodki Storm iz zbirke podatkov »Vzorci« v gruči »pomoč«
```




---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


Importuje údaje z klastra Fabric Kusto v režime zisťovania.


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

Importuje údaje z inštancie databázy KQL


## Examples

### Example #1
Vráti tabuľku s informáciami o udalostiach Storm
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Tabuľka s udalosťami Storm z databázy Samples v klastri Help
```




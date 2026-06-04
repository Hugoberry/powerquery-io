---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


Importēt datus no Fabric Kusto klastera atklāšanas režīmā.


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

Importē datus no jūsu KQL datu bāzes instances


## Examples

### Example #1
Atgriež Storm notikumu informācijas tabulu
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Tabula ar Storm notikumiem no datubāzes “Samples” (Paraugi), kas atrodas klasterī “help” (palīdzība)
```




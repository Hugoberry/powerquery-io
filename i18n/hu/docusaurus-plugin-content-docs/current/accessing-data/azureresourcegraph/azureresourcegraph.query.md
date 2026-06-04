---
title: AzureResourceGraph.Query
---

# AzureResourceGraph.Query



## Syntax

```powerquery
AzureResourceGraph.Query(
    query as text,
    optional scope as text,
    optional subscription as text,
    optional managementGroup as text,
    optional options as record
) as table
```


## Remarks

Kezdő lekérdezésmintákért lásd: https://learn.microsoft.com/azure/governance/resource-graph/samples/starter?tabs=azure-cli.


## Examples

### Example #1
Egy olyan táblát ad vissza, amely a resources felhasználói lekérdezés lekérdezési eredményeit tartalmazza
```powerquery
AzureResourceGraph.Query("resources")
```




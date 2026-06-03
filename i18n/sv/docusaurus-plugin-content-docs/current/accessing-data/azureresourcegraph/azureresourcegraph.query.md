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

Se https://learn.microsoft.com/azure/governance/resource-graph/samples/starter?tabs=azure-cli för startfrågeexempel.


## Examples

### Example #1
Returnera en tabell med frågeresultat för användarfrågan "resources"
```powerquery
AzureResourceGraph.Query("resources")
```




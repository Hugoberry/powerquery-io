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

Oglejte si https://learn.microsoft.com/azure/governance/resource-graph/samples/starter?tabs=azure-cli za vzorčne poizvedbe za začetek.


## Examples

### Example #1
Vrne tabelo z rezultati poizvedbe uporabnikove poizvedbe"viri"
```powerquery
AzureResourceGraph.Query("resources")
```




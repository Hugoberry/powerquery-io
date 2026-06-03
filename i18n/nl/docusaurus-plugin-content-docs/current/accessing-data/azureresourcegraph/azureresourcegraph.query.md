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

Zie https://learn.microsoft.com/azure/governance/resource-graph/samples/starter?tabs=azure-cli voor voorbeelden van starterquery's.


## Examples

### Example #1
Een tabel met queryresultaten van de gebruikersquery 'resources' retourneren
```powerquery
AzureResourceGraph.Query("resources")
```




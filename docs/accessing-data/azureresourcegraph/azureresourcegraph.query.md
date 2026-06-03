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

See https://learn.microsoft.com/azure/governance/resource-graph/samples/starter?tabs=azure-cli for starter query samples.


## Examples

### Example #1
Return a table with query results of user query 'resources'
```powerquery
AzureResourceGraph.Query("resources")
```




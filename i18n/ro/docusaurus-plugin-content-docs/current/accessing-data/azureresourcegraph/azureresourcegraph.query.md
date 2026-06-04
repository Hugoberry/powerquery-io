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

Consultați https://learn.microsoft.com/azure/governance/resource-graph/samples/starter?tabs=azure-cli pentru eșantioane de interogare de pornire.


## Examples

### Example #1
Returnați un tabel cu rezultatele de interogare pentru interogarea utilizatorului „resurse”
```powerquery
AzureResourceGraph.Query("resources")
```




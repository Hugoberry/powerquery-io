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

Žr. https://learn.microsoft.com/azure/governance/resource-graph/samples/starter?tabs=azure-cli pradinių užklausų pavyzdžius.


## Examples

### Example #1
Pateikti lentelę su vartotojo užklausos „ištekliai“ užklausos rezultatais
```powerquery
AzureResourceGraph.Query("resources")
```




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

Per gli esempi di query starter, vedere https://learn.microsoft.com/azure/governance/resource-graph/samples/starter?tabs=azure-cli.


## Examples

### Example #1
Restituisce una tabella con i risultati della query delle "risorse" query utente
```powerquery
AzureResourceGraph.Query("resources")
```




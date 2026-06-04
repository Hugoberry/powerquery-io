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

Consulteu https://learn.microsoft.com/azure/governance/resource-graph/samples/starter?tabs=azure-cli per veure consultes de mostra.


## Examples

### Example #1
Retorna una taula amb resultats de la consulta de la consulta de l'usuari "resources"
```powerquery
AzureResourceGraph.Query("resources")
```




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

Voir https://learn.microsoft.com/azure/governance/resource-graph/samples/starter?tabs=azure-cli pour des exemples de requêtes de démarrage.


## Examples

### Example #1
Renvoie une table avec les résultats de la requête utilisateur "ressources"
```powerquery
AzureResourceGraph.Query("resources")
```




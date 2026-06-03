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

Consulte https://learn.microsoft.com/azure/governance/resource-graph/samples/starter?tabs=azure-cli para obter amostras de consultas básicas.


## Examples

### Example #1
Devolver uma tabela com os resultados da consulta do utilizador "recursos"
```powerquery
AzureResourceGraph.Query("resources")
```




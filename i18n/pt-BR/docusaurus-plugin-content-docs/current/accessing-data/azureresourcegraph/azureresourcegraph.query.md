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

Consulte https://learn.microsoft.com/azure/governance/resource-graph/samples/starter?tabs=azure-cli para obter exemplos de consulta inicial.


## Examples

### Example #1
Retornar uma tabela com resultados de consulta de 'recursos' da consulta do usuário
```powerquery
AzureResourceGraph.Query("resources")
```




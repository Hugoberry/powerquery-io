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

Vexa consultas de mostraxe de inicio en https://learn.microsoft.com/azure/governance/resource-graph/samples/starter?tabs=azure-cli.


## Examples

### Example #1
Devolver unha táboa cos resultados da consulta dos "recursos" da consulta do usuario
```powerquery
AzureResourceGraph.Query("resources")
```




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

Vea ejemplos de consultas de inicio: https://learn.microsoft.com/es-es/azure/governance/resource-graph/samples/starter?tabs=azure-cli.


## Examples

### Example #1
Devolver una tabla con los resultados de la consulta de usuario "recursos"
```powerquery
AzureResourceGraph.Query("resources")
```




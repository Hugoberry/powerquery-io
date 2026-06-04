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

Ukázky počátečních dotazů najdete vhttps://learn.microsoft.com/azure/governance/resource-graph/samples/starter?tabs=azure-cli.


## Examples

### Example #1
Vrátí tabulku s výsledky dotazu na prostředky uživatelského dotazu.
```powerquery
AzureResourceGraph.Query("resources")
```




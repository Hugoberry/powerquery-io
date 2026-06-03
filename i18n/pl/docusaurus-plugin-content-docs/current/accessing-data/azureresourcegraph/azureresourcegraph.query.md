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

Sprawdź stronę https://learn.microsoft.com/azure/governance/resource-graph/samples/starter?tabs=azure-cli w celu uzyskania próbek zapytań początkowych.


## Examples

### Example #1
Zwróć tabelę z wynikami zapytania użytkownika „resources”
```powerquery
AzureResourceGraph.Query("resources")
```




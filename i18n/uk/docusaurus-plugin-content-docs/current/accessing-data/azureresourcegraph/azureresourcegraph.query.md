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

Перегляньте сторінку https://learn.microsoft.com/azure/governance/resource-graph/samples/starter?tabs=azure-cli, щоб знайти зразки початкових запитів.


## Examples

### Example #1
Повернути таблицю з результатами запиту "resources" користувача
```powerquery
AzureResourceGraph.Query("resources")
```




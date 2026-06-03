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

有关初学者查询示例，请参阅： https://learn.microsoft.com/azure/governance/resource-graph/samples/starter?tabs=azure-cli。


## Examples

### Example #1
返回包含用户查询“resources”的查询结果的表
```powerquery
AzureResourceGraph.Query("resources")
```




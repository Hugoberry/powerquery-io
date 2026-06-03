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

スターター クエリのサンプルについては https://learn.microsoft.com/azure/governance/resource-graph/samples/starter?tabs=azure-cli を参照してください。


## Examples

### Example #1
ユーザー クエリ 'resources' のクエリ結果を含むテーブルを返します
```powerquery
AzureResourceGraph.Query("resources")
```




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

시작 쿼리 샘플은 https://learn.microsoft.com/azure/governance/resource-graph/samples/starter?tabs=azure-cli를 참조하세요.


## Examples

### Example #1
사용자 쿼리 'resources'의 쿼리 결과가 포함된 테이블 반환
```powerquery
AzureResourceGraph.Query("resources")
```




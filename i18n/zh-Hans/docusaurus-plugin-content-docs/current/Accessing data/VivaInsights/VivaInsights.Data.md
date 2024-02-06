---
title: VivaInsights.Data
---

# VivaInsights.Data



## Syntax

```powerquery
VivaInsights.Data(
    scopeId as text,
    optional jobName as text,
    optional jobId as text,
    optional advancedParameters as record
) as table
```


## Remarks

从工作区分析导入每周指标和属性数据。


## Examples

### Example #1 
返回一个表，其中包含分区中每个受测员工的可见属性和每周指标。
```powerquery
VivaInsights.Data("5f142ea5-c08a-eb02-de68-41dccdefb141")
```

Result: 
```powerquery
#表({"Query1"}, {{"PersonId""}, {"PID"}})
```




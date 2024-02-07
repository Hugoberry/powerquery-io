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

Workplace Analytics から週単位のメトリックと属性データをインポートします。


## Examples

### Example #1 
パーティション内の測定された従業員ごとに、表示可能な属性と週ごとのメトリックを含むテーブルを返します。
```powerquery
VivaInsights.Data("5f142ea5-c08a-eb02-de68-41dccdefb141")
```

Result: 
```powerquery
#table({"Query1"}, {{"PersonId""}, {"PID"}})
```




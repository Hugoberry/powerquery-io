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


## Details

Workplace Analytics에서 주간 메트릭 및 특성 데이터를 가져옵니다.


## Examples

### Example #1 
파티션에서 측정된 각 직원에 대해 표시되는 특성 및 주별 메트릭을 포함하는 표를 반환합니다.
```powerquery
VivaInsights.Data("5f142ea5-c08a-eb02-de68-41dcdefb141")
```

Result: 
```powerquery
#table({"Query1"}, {{"PersonId""}, {"PID"}})
```




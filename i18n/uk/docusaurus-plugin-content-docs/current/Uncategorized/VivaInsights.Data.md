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

Імпорт щотижневих показників і даних атрибутів із Workplace Analytics.


## Examples

### Example #1 
Повертає таблицю з видимими атрибутами та показниками на тиждень для кожного оцінюваного працівника в розділі.
```powerquery
VivaInsights.Data("5f142ea5-c08a-eb02-de68-41dccdefb141")
```

Result: 
```powerquery
#table({"Query1"}, {{"PersonId""}, {"PID"}})
```




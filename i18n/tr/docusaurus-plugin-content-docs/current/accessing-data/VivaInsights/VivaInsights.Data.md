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

Workplace Analytics'ten haftalık ölçümleri ve öznitelik verilerini içeri aktarın.


## Examples

### Example #1 
Bölümdeki ölçülen her çalışan için görünür öznitelikleri ve haftalık ölçümleri olan bir tablo döndürür.
```powerquery
VivaInsights.Data("5f142ea5-c08a-eb02-de68-41dccdefb141")
```

Result: 
```powerquery
#table({"Query1"}, {{"PersonId""}, {"PID"}})
```




---
title: WorkplaceAnalytics.Data
---

# WorkplaceAnalytics.Data



## Syntax

```powerquery
WorkplaceAnalytics.Data(
    scopeId as text,
    optional jobName as text,
    optional jobId as text,
    optional schemaType as text
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




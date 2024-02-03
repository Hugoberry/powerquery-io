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


## Details

從工作場所分析匯入每週計量與屬性資料。


## Examples

### Example #1 
針對分割區中每位要評量的員工，傳回具有可見屬性及每週計量的資料表。
```powerquery
VivaInsights.Data("5f142ea5-c08a-eb02-de68-41dccdefb141")
```

Result: 
```powerquery
#table({"Query1"}, {{"PersonId""}, {"PID"}})
```




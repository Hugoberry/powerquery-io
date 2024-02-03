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

Importuj metryki tygodniowe i dane atrybutów z usługi Workplace Analytics.


## Examples

### Example #1 
Zwraca tabelę z widocznymi atrybutami i metrykami według tygodnia dla każdego zmierzonego pracownika w partycji.
```powerquery
VivaInsights.Data("5f142ea5-c08a-eb02-de68-41dccdefb141")
```

Result: 
```powerquery
#table({"Query1"}, {{"PersonId""}, {"PID"}})
```




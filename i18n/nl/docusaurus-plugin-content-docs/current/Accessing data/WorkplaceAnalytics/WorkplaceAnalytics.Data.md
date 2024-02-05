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

Wekelijkse metrische gegevens en kenmerkgegevens importeren uit Workplace Analytics.


## Examples

### Example #1 
Hiermee wordt voor elke gemeten werknemer in de partitie een tabel met zichtbare kenmerken en metrische waarden per week geretourneerd.
```powerquery
VivaInsights.Data("5f142ea5-c08a-eb02-de68-41dccdefb141")
```

Result: 
```powerquery
#table({"Query1"}, {{"PersonId""}, {"PID"}})
```




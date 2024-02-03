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

Importuokite savaitės metriką ir atributų duomenis iš „Workplace Analytics“.


## Examples

### Example #1 
Pateikia lentelę su matomais atributais ir kiekvieno matuojamo darbuotojo skaidinyje savaitės metriką.
```powerquery
VivaInsights.Data("5f142ea5-c08a-eb02-de68-41dccdefb141")
```

Result: 
```powerquery
#table({"Query1"}, {{"PersonId""}, {"PID"}})
```




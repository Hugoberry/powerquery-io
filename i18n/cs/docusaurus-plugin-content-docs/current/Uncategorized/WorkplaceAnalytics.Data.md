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

Umožňuje importovat týdenní metriky a data atributů z Workplace Analytics.


## Examples

### Example #1 
Vrátí tabulku s viditelnými atributy a týdenními metrikami pro jednotlivé měřené zaměstnance v oddílu.
```powerquery
VivaInsights.Data("5f142ea5-c08a-eb02-de68-41dccdefb141")
```

Result: 
```powerquery
#table({"Query1"}, {{"PersonId""}, {"PID"}})
```




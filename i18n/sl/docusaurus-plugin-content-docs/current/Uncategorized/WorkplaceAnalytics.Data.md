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

Uvozite tedensko metriko in podatke atributov iz Analitike delovnega mesta.


## Examples

### Example #1 
Pridobi tabelo z vidnimi atributi in metriko na teden za vsakega izmerjenega zaposlenega na particiji.
```powerquery
VivaInsights.Data("5f142ea5-c08a-eb02-de68-41dccdefb141")
```

Result: 
```powerquery
#table({"Query1"}, {{"PersonId""}, {"PID"}})
```




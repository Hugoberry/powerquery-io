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

Importēt nedēļas metriku un atribūtu datus no Workplace Analytics.


## Examples

### Example #1 
Atgriež tabulu ar redzamiem atribūtiem un nedēļas metriku katram nodalījumā mērītajam darbiniekam.
```powerquery
VivaInsights.Data("5f142ea5-c08a-eb02-de68-41dccdefb141")
```

Result: 
```powerquery
#table({"Query1"}, {{"PersonId""}, {"PID"}})
```




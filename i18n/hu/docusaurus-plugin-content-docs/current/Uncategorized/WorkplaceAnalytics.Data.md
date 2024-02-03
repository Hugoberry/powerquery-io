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

Heti metrikák és attribútumok adatainak importálása a Workplace Analyticsből.


## Examples

### Example #1 
Egy olyan táblát ad vissza, amely látható attribútumokkal és heti metrikákkal rendelkezik a partíció minden mért alkalmazottja esetében.
```powerquery
VivaInsights.Data("5f142ea5-c08a-eb02-de68-41dccdefb141")
```

Result: 
```powerquery
#table({"Query1"}, {{"PersonId""}, {"PID"}})
```




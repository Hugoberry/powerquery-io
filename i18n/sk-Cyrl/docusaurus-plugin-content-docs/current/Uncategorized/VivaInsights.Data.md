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


## Details

Importujte týždenné metriky a údaje atribútov zo služby Workplace Analytics.


## Examples

### Example #1 
Vráti tabuľku s viditeľnými atribútmi a týždennými metrikami pre každého meraného zamestnanca v danej oblasti.
```powerquery
VivaInsights.Data("5f142ea5-c08a-eb02-de68-41dccdefb141")
```

Result: 
```powerquery
#table({"Query1"}, {{"PersonId""}, {"PID"}})
```




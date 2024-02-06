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


## Remarks

Hiermit werden wöchentliche Metrikdaten und Attributdaten aus Workplace Analytics importiert.


## Examples

### Example #1 
Hiermit wird eine Tabelle mit sichtbaren Attributen und wöchentlichen Metrikdaten für jeden erfassten Mitarbeiter in der Partition zurückgegeben.
```powerquery
VivaInsights.Data(„5f142ea5-c08a-eb02-de68-41dccdefb141“)
```

Result: 
```powerquery
#table({"Query1"}, {{"PersonId""}, {"PID"}})
```




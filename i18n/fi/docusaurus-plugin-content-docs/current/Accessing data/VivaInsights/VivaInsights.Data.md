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

Tuo viikoittaiset mittari- ja määritetiedot Workplace Analyticsistä.


## Examples

### Example #1 
Palauttaa taulukon, joka sisältää osion kunkin mitatun työntekijän näkyvät määritteet ja viikkokohtaiset mittarit.
```powerquery
VivaInsights.Data("5f142ea5-c08a-eb02-de68-41dccdefb141")
```

Result: 
```powerquery
#table({"Query1"}, {{"PersonId""}, {"PID"}})
```




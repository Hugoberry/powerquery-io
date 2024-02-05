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

Importați măsurătorile săptămânale și datele de atribute din Workplace Analytics.


## Examples

### Example #1 
Returnează un tabel cu atribute vizibile și măsurători pe săptămână pentru fiecare angajat măsurat din partiție.
```powerquery
VivaInsights.Data("5f142ea5-c08a-eb02-de68-41dccdefb141")
```

Result: 
```powerquery
#table({"Query1"}, {{"PersonId""}, {"PID"}})
```




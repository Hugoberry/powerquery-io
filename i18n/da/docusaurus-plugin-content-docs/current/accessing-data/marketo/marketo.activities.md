---
title: Marketo.Activities
---

# Marketo.Activities


Returnerer en tabel, der viser kundeemners aktiviteter.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Remarks

Foretager et kald til Marketo REST API-slutpunktet på `url`/rest/v1/activities.json. Alle aktiviteter på listen `activityIds`, der er sket siden den `startTime`, returneres.


## Examples

### Example #1
Opretter en tabel med "websidebesøg"-aktiviteter siden den 1. november 2015
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
En tabel med alle "websidebesøg"-aktiviteter siden den 1. november 2015
```




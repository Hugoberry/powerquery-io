---
title: Marketo.Activities
---

# Marketo.Activities


Returnerar en tabell med huvudaktiviteter.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Remarks

Anropar Marketo REST API-slutpunkten på <code>url</code>/rest/v1/activities.json. Alla aktiviteter i listan <code>activityIds</code> som har inträffat sedan <code>startTime</code> returneras.


## Examples

### Example #1 
Hämtar en tabell över webbplatsbesöksaktiviteter sedan den 1 november 2015
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
En tabell med information om alla webbplatsbesöksaktiviteter sedan den 1 november
```




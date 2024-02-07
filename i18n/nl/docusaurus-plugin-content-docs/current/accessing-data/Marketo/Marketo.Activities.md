---
title: Marketo.Activities
---

# Marketo.Activities


Hiermee wordt een tabel met leadactiviteiten geretourneerd.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Remarks

Hiermee wordt het eindpunt van de Marketo REST API op <code>url</code>/rest/v1/activities.json aangeroepen. Alle activiteiten in de lijst <code>activityIds</code> hebben plaatsgevonden sinds <code>startTime</code> is geretourneerd.


## Examples

### Example #1 
Hiermee wordt een tabel met alle activiteiten voor Webpagina bezoeken sinds 1 november 2015 opgehaald
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
Een tabel met details van alle activiteiten voor Webpagina bezoeken sinds 1 november
```




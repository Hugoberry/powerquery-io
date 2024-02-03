---
title: Marketo.Activities
---

# Marketo.Activities


## Description

Vráti tabuľku s aktivitami potenciálneho zákazníka.


## Syntax

```powerquery
Marketo.Activities(
    url as text,
    startTime as date,
    activityIds as list
) as table
```


## Details

Uskutočňovanie volania do koncového bodu rozhrania Marketo REST API na adrese <code>url</code>/rest/v1/activities.json. Vrátia sa všetky aktivity v zozname <code>activityIds</code>, ktoré sa vykonali od dátumu v poli <code>startTime</code>.


## Examples

### Example #1 
Stiahne tabuľku aktivít návštev webovej stránky od 1. novembra 2015
```powerquery
Marketo.Activities("https://100-AAA-999.mktorest.com/rest", #date(2015,11,1), {1})
```

Result: 
```powerquery
Tabuľka s podrobnosťami o všetkých aktivitách návštev webovej stránky od 1. novembra
```




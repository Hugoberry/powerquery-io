---
title: List.Dates
---

# List.Dates


## Description

Egy date (dátum) típusú értékekből álló listát hoz létre egy kezdeti érték, egy elemszám és egy növekmény-időtartam megadása alapján.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Details

Egy <code>count</code> méretű, <code>start</code> értéktől induló, <code>date</code> típusú értékekből álló listát ad vissza. A megadott <code>step</code> növekmény egy <code>duration</code> típusú érték, amelyet a függvény hozzáad minden egyes értékhez.


## Examples

### Example #1 
Hozzon létre egy 5 értékből álló listát, amelynek első eleme szilveszter (#date(2011, 12, 31)), és az érték 1 nappal növekszik (#duration(1, 0, 0, 0)).
```powerquery
List.Dates(#date(2011, 12, 31), 5, #duration(1, 0, 0, 0))
```

Result: 
```powerquery
{
    #date(2011, 12, 31),
    #date(2012, 1, 1),
    #date(2012, 1, 2),
    #date(2012, 1, 3),
    #date(2012, 1, 4)
}
```




## Category
List.Generators

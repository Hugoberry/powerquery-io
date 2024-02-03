---
title: List.DateTimes
---

# List.DateTimes


## Description

Egy datetime (dátum és idő) típusú értékekből álló listát hoz létre egy kezdeti érték, egy elemszám és egy növekmény-időtartam megadása alapján.


## Syntax

```powerquery
List.DateTimes(
    start as datetime,
    count as number,
    step as duration
) as list
```


## Details

Egy <code>count</code> méretű, <code>start</code> értéktől induló, <code>datetime</code> típusú értékekből álló listát ad vissza. A megadott <code>step</code> növekmény egy <code>duration</code> típusú érték, amelyet a függvény hozzáad minden egyes értékhez.


## Examples

### Example #1 
10 értékből álló lista létrehozása, újév előtt 5 perccel kezdve (#datetime(2011, 12, 31, 23, 55, 0)), 1 perces növekménnyel (#duration(0, 0, 1, 0))
```powerquery
List.DateTimes(#datetime(2011, 12, 31, 23, 55, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetime(2011, 12, 31, 23, 55, 0),
    #datetime(2011, 12, 31, 23, 56, 0),
    #datetime(2011, 12, 31, 23, 57, 0),
    #datetime(2011, 12, 31, 23, 58, 0),
    #datetime(2011, 12, 31, 23, 59, 0),
    #datetime(2012, 1, 1, 0, 0, 0),
    #datetime(2012, 1, 1, 0, 1, 0),
    #datetime(2012, 1, 1, 0, 2, 0),
    #datetime(2012, 1, 1, 0, 3, 0),
    #datetime(2012, 1, 1, 0, 4, 0)
}
```




## Category
List.Generators

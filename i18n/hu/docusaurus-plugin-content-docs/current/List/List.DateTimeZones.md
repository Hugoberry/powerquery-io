---
title: List.DateTimeZones
---

# List.DateTimeZones


## Description

Egy datetimezone (dátum és idő időzóna-eltolással) típusú értékekből álló listát hoz létre egy kezdeti érték, egy elemszám és egy növekmény-időtartam megadása alapján.


## Syntax

```powerquery
List.DateTimeZones(
    start as datetimezone,
    count as number,
    step as duration
) as list
```


## Details

Egy <code>count</code> méretű, <code>start</code> értéktől induló, <code>datetimezone</code> típusú értékekből álló listát ad vissza. A megadott <code>step</code> növekmény egy <code>duration</code> típusú érték, amelyet a függvény hozzáad minden egyes értékhez.


## Examples

### Example #1 
10 értékből álló lista létrehozása, újév előtt 5 perccel kezdve (#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0)), 1 perces növekménnyel (#duration(0, 0, 1, 0))
```powerquery
List.DateTimeZones(#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetimezone(2011, 12, 31, 23, 55, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 56, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 57, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 58, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 59, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 0, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 1, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 2, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 3, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 4, 0, -8, 0)
}
```




## Category
List.Generators

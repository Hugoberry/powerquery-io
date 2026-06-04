---
title: List.Times
---

# List.Times


Egy time (idő) típusú értékekből álló listát hoz létre egy kezdeti érték, egy elemszám és egy növekmény-időtartam megadása alapján.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Remarks

Egy `count` méretű, `start` értéktől induló, `time` típusú értékekből álló listát ad vissza. A megadott `step` növekmény egy `duration` típusú érték, amelyet a függvény hozzáad minden egyes értékhez.


## Examples

### Example #1
4 értékből álló lista létrehozása, déltől kezdve (#time(12, 0, 0)), egy órás növekménnyel (#duration(0, 1, 0, 0))
```powerquery
List.Times(#time(12, 0, 0), 4, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #time(12, 0, 0),
    #time(13, 0, 0),
    #time(14, 0, 0),
    #time(15, 0, 0)
}
```




## Category
List.Generators

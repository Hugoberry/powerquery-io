---
title: List.Times
---

# List.Times


Opretter en liste over værdier af typen time med en indledende værdi for værdi, antal og stigende varighed.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Remarks

Returnerer en liste over værdier af typen `time` i størrelsen `count` og med start ved `start`. Den angivne stigning, `step`, er en værdi af typen `duration`, der lægges til alle værdier.


## Examples

### Example #1
Opret en liste over 4 værdier med start ved middag (#time(12, 0, 0)) og med en stigning på én time (#duration(0, 1, 0, 0)).
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

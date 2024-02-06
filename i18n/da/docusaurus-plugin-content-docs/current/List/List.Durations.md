---
title: List.Durations
---

# List.Durations


Opretter en liste over værdier af typen duration med en indledende værdi for værdi, antal og stigende varighed.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Remarks

Returnerer en liste over værdier af typen <code>count</code> <code>duration</code> med start ved <code>start</code> og med en stigning på den angivne <code>duration</code> <code>step</code>.


## Examples

### Example #1 
Opret en liste over 5 værdier med start ved 1 time og med en stigning på en time.
```powerquery
List.Durations(#duration(0, 1, 0, 0), 5, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #duration(0, 1, 0, 0),
    #duration(0, 2, 0, 0),
    #duration(0, 3, 0, 0),
    #duration(0, 4, 0, 0),
    #duration(0, 5, 0, 0)
}
```




## Category
List.Generators

---
title: List.Durations
---

# List.Durations


Genererar en lista med duration-värden baserat på ett ursprungligt värde, antal och inkrementellt duration-värde.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Remarks

Returnerar en lista med <code>count</code> <code>duration</code>-värden med början från <code>start</code> som ökar med <code>duration</code>-värdet <code>step</code>.


## Examples

### Example #1 
Skapa en lista med 5 värden med början från 1 timma och öka i steg om en timma.
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

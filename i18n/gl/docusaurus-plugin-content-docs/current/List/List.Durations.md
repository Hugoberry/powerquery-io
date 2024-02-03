---
title: List.Durations
---

# List.Durations


## Description

Xera unha lista de duración indicado un valor inicial, unha conta e un valor de duración incremental.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Details

Devolve unha lista de valores <code>count</code> <code>duration</code>, comezando en <code>start</code> e incrementada pola <code>duration</code> <code>step</code> indicada.


## Examples

### Example #1 
Crea unha lista de 5 valores, comezando en 1 hora e incrementándose nunha hora.
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

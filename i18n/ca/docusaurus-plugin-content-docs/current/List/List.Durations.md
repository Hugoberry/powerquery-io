---
title: List.Durations
---

# List.Durations


## Description

Genera una llista de valors duration donat un valor inicial, un recompte i un valor duration incremental.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Details

Retorna una llista de valors <code>count</code> <code>duration</code>, que comencen en <code>start</code> i s'incrementen en un valor <code>duration</code> donat, <code>step</code>.


## Examples

### Example #1 
Crea una llista de 5 valors, que comencen amb 1 hora i amb increments d&#39;1 hora.
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

---
title: List.Durations
---

# List.Durations


Genera una lista de valores duration dado un valor inicial, un recuento y un valor de duración incremental.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Remarks

Devuelve una lista de valores <code>count</code> <code>duration</code>, empezando en <code>start</code> con el incremento dado <code>duration</code> <code>step</code>.


## Examples

### Example #1 
Crear una lista de 5 valores empezando por 1 hora y con incrementos de 1 hora.
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

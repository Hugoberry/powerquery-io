---
title: List.Durations
---

# List.Durations


Gere uma lista de valores duration a partir de um valor inicial, uma contagem e um valor duration incremental.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Remarks

Retorna uma lista de valores <code>duration</code> <code>count</code>, que começa em <code>start</code> e é incrementada pelo valor <code>duration</code> <code>step</code> especificado.


## Examples

### Example #1 
Crie uma lista de 5 valores que comece em uma hora e cujos valores sejam incrementados em uma hora.
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

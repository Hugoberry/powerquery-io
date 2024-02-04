---
title: List.Durations
---

# List.Durations


## Description

Gera uma lista de valores de duração a partir de um valor inicial, uma contagem e um valor de duração incremental.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Details

Devolve uma lista de valores <code>count</code> <code>duration</code>, começando em <code>start</code> e incrementados pela <code>duration</code> <code>step</code> especificada.


## Examples

### Example #1 
Criar uma lista de 5 valores começando com 1 hora e incrementando por uma hora.
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

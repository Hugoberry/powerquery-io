---
title: List.Times
---

# List.Times


## Description

Xera unha lista de valores time a partir dun valor inicial, un reconto e un valor de duración incremental.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Details

Devolve unha lista de valores <code>time</code> de tamaño <code>count</code>, comezando en <code>start</code>. O incremento indicado, <code>step</code>, é un valor <code>duration</code> que se engade a cada valor.


## Examples

### Example #1 
Crear unha lista de 4 valores comezando ao mediodía (#time(12, 0, 0)) incrementándose nunha hora (#duration(0, 1, 0, 0)).
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

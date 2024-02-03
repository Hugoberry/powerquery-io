---
title: List.Dates
---

# List.Dates


## Description

Xera unha lista de valores date a partir dun valor inicial, un reconto e un valor de duración incremental.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Details

Devolve unha lista de valores <code>date</code> de tamaño <code>count</code>, comezando en <code>start</code>. O incremento indicado, <code>step</code>, é un valor <code>duration</code> que se engade a cada valor.


## Examples

### Example #1 
Crea unha lista de 5 valores comezando a Noitevella (#date(2011, 12, 31)) incrementándose en 1 día (#duration(1, 0, 0, 0)).
```powerquery
List.Dates(#date(2011, 12, 31), 5, #duration(1, 0, 0, 0))
```

Result: 
```powerquery
{
    #date(2011, 12, 31),
    #date(2012, 1, 1),
    #date(2012, 1, 2),
    #date(2012, 1, 3),
    #date(2012, 1, 4)
}
```




## Category
List.Generators

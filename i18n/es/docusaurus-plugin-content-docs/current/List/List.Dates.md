---
title: List.Dates
---

# List.Dates


## Description

Genera una lista de valores date dados un valor inicial, un recuento y un valor de duración incremental.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Details

Devuelve una lista de valores <code>date</code> de tamaño <code>count</code>, a partir de <code>start</code>. El incremento especificado, <code>step</code>, es un valor <code>duration</code> que se agrega a cada valor.


## Examples

### Example #1 
Crear una lista de 5 valores empezando por Nochevieja (#date(2011, 12, 31)) con incrementos de 1 día (#duration(1, 0, 0, 0)).
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

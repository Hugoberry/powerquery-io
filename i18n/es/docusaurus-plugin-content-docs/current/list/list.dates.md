---
title: List.Dates
---

# List.Dates


Genera una lista de valores date dados un valor inicial, un recuento y un valor de duración incremental.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Remarks

Devuelve una lista de valores `date` de tamaño `count`, a partir de `start`. El incremento especificado, `step`, es un valor `duration` que se agrega a cada valor.


## Examples

### Example #1
Crea una lista de 5 valores a partir a partir de la víspera de Año Nuevo (#date(2011, 12, 31)) que se incrementa en 1 día (#duration(1, 0, 0, 0)).
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

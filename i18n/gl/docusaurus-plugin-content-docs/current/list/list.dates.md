---
title: List.Dates
---

# List.Dates


Xera unha lista de valores date a partir dun valor inicial, un reconto e un valor de duración incremental.


## Syntax

```powerquery
List.Dates(
    start as date,
    count as number,
    step as duration
) as list
```


## Remarks

Devolve unha lista de valores `date` de tamaño `count`, comezando en `start`. O incremento indicado, `step`, é un valor `duration` que se engade a cada valor.


## Examples

### Example #1
Cree unha lista de 5 valores comezando a Noitevella (#date(2011, 12, 31)) incrementándose en 1 día (#duration(1, 0, 0, 0)).
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

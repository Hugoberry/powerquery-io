---
title: List.DateTimes
---

# List.DateTimes


## Description

Xera unha lista de valores datetime a partir dun valor inicial, un reconto e un valor de duración incremental.


## Syntax

```powerquery
List.DateTimes(
    start as datetime,
    count as number,
    step as duration
) as list
```


## Details

Devolve unha lista de valores <code>datetime</code> de tamaño <code>count</code>, comezando en <code>start</code>. O incremento indicado, <code>step</code>, é un valor <code>duration</code> que se engade a cada valor.


## Examples

### Example #1 
Crear unha lista de 10 valores comezando 5 minutos antes do Día de Ano Novo (#datetime(2011, 12, 31, 23, 55, 0)) incrementándose nun 1 minuto (#duration(0, 0, 1, 0)).
```powerquery
List.DateTimes(#datetime(2011, 12, 31, 23, 55, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetime(2011, 12, 31, 23, 55, 0),
    #datetime(2011, 12, 31, 23, 56, 0),
    #datetime(2011, 12, 31, 23, 57, 0),
    #datetime(2011, 12, 31, 23, 58, 0),
    #datetime(2011, 12, 31, 23, 59, 0),
    #datetime(2012, 1, 1, 0, 0, 0),
    #datetime(2012, 1, 1, 0, 1, 0),
    #datetime(2012, 1, 1, 0, 2, 0),
    #datetime(2012, 1, 1, 0, 3, 0),
    #datetime(2012, 1, 1, 0, 4, 0)
}
```




## Category
List.Generators

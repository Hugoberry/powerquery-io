---
title: List.DateTimeZones
---

# List.DateTimeZones


## Description

Xera unha lista de valores datetimezone a partir dun valor inicial, un reconto e un valor de duración incremental.


## Syntax

```powerquery
List.DateTimeZones(
    start as datetimezone,
    count as number,
    step as duration
) as list
```


## Details

Devolve unha lista de valores <code>datetimezone</code> de tamaño <code>count</code>, comezando en <code>start</code>. O incremento indicado, <code>step</code>, é un valor <code>duration</code> que se engade a cada valor.


## Examples

### Example #1 
Crear unha lista de 10 valores comezando 5 minutos antes do Día de Ano Novo (#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0)) incrementándose nun 1 minuto (#duration(0, 0, 1, 0)).
```powerquery
List.DateTimeZones(#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0), 10, #duration(0, 0, 1, 0))
```

Result: 
```powerquery
{
    #datetimezone(2011, 12, 31, 23, 55, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 56, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 57, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 58, 0, -8, 0),
    #datetimezone(2011, 12, 31, 23, 59, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 0, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 1, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 2, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 3, 0, -8, 0),
    #datetimezone(2012, 1, 1, 0, 4, 0, -8, 0)
}
```




## Category
List.Generators

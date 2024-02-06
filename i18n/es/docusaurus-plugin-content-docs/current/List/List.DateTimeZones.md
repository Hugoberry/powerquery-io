---
title: List.DateTimeZones
---

# List.DateTimeZones


Genera una lista de valores datetimezone dados un valor inicial, un recuento y un valor de duración incremental.


## Syntax

```powerquery
List.DateTimeZones(
    start as datetimezone,
    count as number,
    step as duration
) as list
```


## Remarks

Devuelve una lista de valores <code>datetimezone</code> de tamaño <code>count</code>, a partir de <code>start</code>. El incremento especificado, <code>step</code>, es un valor <code>duration</code> que se agrega a cada valor.


## Examples

### Example #1 
Crear una lista de 10 valores comenzando 5 minutos antes del Día del Año Nuevo (#datetimezone(2011, 12, 31, 23, 55, 0, -8, 0)) con incrementos de 1 minuto (#duration (0, 0, 1, 0)).
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

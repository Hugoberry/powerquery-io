---
title: List.Times
---

# List.Times


Genera una lista de valores time dados un valor inicial, un recuento y un valor de duración incremental.


## Syntax

```powerquery
List.Times(
    start as time,
    count as number,
    step as duration
) as list
```


## Remarks

Devuelve una lista de valores <code>time</code> de tamaño <code>count</code>, a partir de <code>start</code>. El incremento especificado, <code>step</code>, es un valor <code>duration</code> que se agrega a cada valor.


## Examples

### Example #1 
Crear una lista de 4 valores comenzando desde el mediodía (#time(12, 0,0)) con incrementos de una hora (#duration(0, 1, 0, 0)).
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

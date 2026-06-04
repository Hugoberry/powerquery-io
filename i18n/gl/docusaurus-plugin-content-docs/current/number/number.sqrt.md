---
title: Number.Sqrt
---

# Number.Sqrt


Devolve a raíz cadrada do número.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

Devolve a raíz cadrada de `number`. Se `number` é nulo, `Number.Sqrt` devolve nulo. Se é un valor negativo, devólvese `Number.NaN` (non numérico).


## Examples

### Example #1
Buscar a raíz cadrada de 625.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2
Buscar a raíz cadrada de 85.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations

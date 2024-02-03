---
title: Number.Sqrt
---

# Number.Sqrt


## Description

Devolve a raíz cadrada do número.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Details

Devolve a raíz cadrada de <code>number</code>.    Se <code>number</code> é nulo, <code>Number.Sqrt</code> devolve nulo. Se é un valor negativo, devólvese <code>Number.NaN</code> (non numérico).


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

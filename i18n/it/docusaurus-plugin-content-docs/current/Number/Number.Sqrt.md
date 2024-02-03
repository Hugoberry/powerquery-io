---
title: Number.Sqrt
---

# Number.Sqrt


## Description

Restituisce la radice quadrata del numero.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Details

Restituisce la radice quadrata di <code>number</code>.    Se <code>number</code> è Null, <code>Number.Sqrt</code> restituisce Null. Se è un valore negativo, viene restituito <code>Number.NaN</code> (non un numero).


## Examples

### Example #1 
Trovare la radice quadrata di 625.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2 
Trovare la radice quadrata di 85.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations

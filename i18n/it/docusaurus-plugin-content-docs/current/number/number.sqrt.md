---
title: Number.Sqrt
---

# Number.Sqrt


Restituisce la radice quadrata del numero.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

Restituisce la radice quadrata di `number`. Se `number` è Null, `Number.Sqrt` restituisce Null. Se è un valore negativo, viene restituito `Number.NaN` (non un numero).


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

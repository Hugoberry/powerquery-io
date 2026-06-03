---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


Restituisce il risultato dell'arrotondamento dei numeri positivi per difetto e dei numeri negativi per eccesso. È possibile specificare il numero di cifre.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

Restituisce il risultato dell'arrotondamento di `number` in base al segno del numero. Questa funzione arrotonda i numeri positivi per difetto e i numeri negativi per eccesso. Se è specificato `digits`, `number` viene arrotondato al numero di cifre decimali di `digits`.


## Examples

### Example #1
Arrotondare per eccesso il numero -1,2.
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2
Arrotondare per eccesso il numero 1,2.
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3
Arrotondare il numero -1,234 a due posizioni decimali verso lo zero.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding

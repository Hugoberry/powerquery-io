---
title: Number.RoundAwayFromZero
---

# Number.RoundAwayFromZero


Restituisce il risultato dell&#39;arrotondamento dei numeri positivi per eccesso e dei numeri negativi per difetto. È possibile specificare il numero di cifre.


## Syntax

```powerquery
Number.RoundAwayFromZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

Restituisce il risultato dell'arrotondamento di <code>number</code> in base al segno del numero. Questa funzione arrotonda i numeri positivi per eccesso e i numeri negativi per difetto.    Se è specificato <code>digits</code>, <code>number</code> viene arrotondato al numero di cifre decimali di <code>digits</code>.  


## Examples

### Example #1 
Arrotondare il valore assoluto del numero -1,2.
```powerquery
Number.RoundAwayFromZero(-1.2)
```

Result: 
```powerquery
-2
```


### Example #2 
Arrotondare il valore assoluto del numero 1,2.
```powerquery
Number.RoundAwayFromZero(1.2)
```

Result: 
```powerquery
2
```


### Example #3 
Arrotondare il numero -1,234 a due posizioni decimali dallo zero.
```powerquery
Number.RoundAwayFromZero(-1.234, 2)
```

Result: 
```powerquery
-1.24
```




## Category
Number.Rounding

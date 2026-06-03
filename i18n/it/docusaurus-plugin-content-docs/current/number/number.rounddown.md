---
title: Number.RoundDown
---

# Number.RoundDown


Restituisce il numero più elevato precedente. È possibile specificare il numero di cifre.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Remarks

Restituisce il risultato dell'arrotondamento `number` verso il basso all'intero più alto precedente. Se `number` è Null, questa funzione restituisce Null. Se viene specificato `digits`, `number` viene arrotondato al numero di cifre decimali specificato.


## Examples

### Example #1
Arrotondare per difetto 1,234 all'intero.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2
Arrotondare per difetto 1,999 all'intero.
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3
Arrotondare 1,999 per difetto a due posizioni decimali.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding

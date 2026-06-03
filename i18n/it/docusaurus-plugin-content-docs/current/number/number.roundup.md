---
title: Number.RoundUp
---

# Number.RoundUp


Restituisce il numero più elevato successivo. È possibile specificare il numero di cifre.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Remarks

Restituisce il risultato dell'arrotondamento di `number` fino al successivo numero intero più alto. Se `number` è Null, questa funzione restituisce null. Se viene specificata `digits`, `number` viene arrotondato al numero specificato di cifre decimali.


## Examples

### Example #1
Arrotondare per eccesso 1,234 all'intero.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2
Arrotondare per eccesso 1,999 all'intero.
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3
Arrotondare 1,234 per eccesso a due posizioni decimali.
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding

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

Restituisce il risultato dell'arrotondamento di <code>number</code> fino al successivo numero intero più alto. Se <code>number</code> è Null, questa funzione restituisce null.    Se viene specificata <code>digits</code>, <code>number</code> viene arrotondato al numero specificato di cifre decimali.  


## Examples

### Example #1 
Arrotondare per eccesso 1,234 all&#39;intero.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2 
Arrotondare per eccesso 1,999 all&#39;intero.
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

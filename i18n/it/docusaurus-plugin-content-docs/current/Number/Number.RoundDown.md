---
title: Number.RoundDown
---

# Number.RoundDown


## Description

Restituisce il numero più elevato precedente. È possibile specificare il numero di cifre.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Details

Restituisce il risultato dell'arrotondamento <code>number</code> verso il basso all'intero più alto precedente. Se <code>number</code> è Null, questa funzione restituisce Null.    Se viene specificato <code>digits</code>, <code>number</code> viene arrotondato al numero di cifre decimali specificato.  


## Examples

### Example #1 
Arrotondare per difetto 1,234 all&#39;intero.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Arrotondare per difetto 1,999 all&#39;intero.
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

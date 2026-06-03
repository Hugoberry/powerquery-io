---
title: Number.IsEven
---

# Number.IsEven


Indica se il valore è pari.


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Remarks

Indica se il valore `number` è pari restituendo `true` se è pari, in caso contrario `false`.


## Examples

### Example #1
Verificare se 625 è un numero pari.
```powerquery
Number.IsEven(625)
```

Result: 
```powerquery
false
```


### Example #2
Verificare se 82 è un numero pari.
```powerquery
Number.IsEven(82)
```

Result: 
```powerquery
true
```




## Category
Number.Information

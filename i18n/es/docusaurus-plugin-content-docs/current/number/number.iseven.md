---
title: Number.IsEven
---

# Number.IsEven


Indica si el valor es par.


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Remarks

Indica si el valor `number`, está volviendo `true` incluso si es uniforme, `false` si no.


## Examples

### Example #1
Comprobar si 625 es un número par.
```powerquery
Number.IsEven(625)
```

Result: 
```powerquery
false
```


### Example #2
Comprobar si 82 es un número par.
```powerquery
Number.IsEven(82)
```

Result: 
```powerquery
true
```




## Category
Number.Information

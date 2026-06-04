---
title: Number.IsEven
---

# Number.IsEven


Indica se o valor é par.


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Remarks

Indica se o valor, `number`, é par devolvendo `true` se é par, se non, `false`.


## Examples

### Example #1
Comprobar se 625 é un número par.
```powerquery
Number.IsEven(625)
```

Result: 
```powerquery
false
```


### Example #2
Comprobar se 82 é un número par.
```powerquery
Number.IsEven(82)
```

Result: 
```powerquery
true
```




## Category
Number.Information

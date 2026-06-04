---
title: Number.IsOdd
---

# Number.IsOdd


Azt jelzi, hogy az érték páratlan-e.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Remarks

Azt jelzi, hogy az érték páratlan-e. Ha a(z) `number` páratlan szám, `true` értéket ad vissza, egyéb esetben pedig `false` értéket ad vissza.


## Examples

### Example #1
Annak ellenőrzése, hogy a 625 páratlan szám-e
```powerquery
Number.IsOdd(625)
```

Result: 
```powerquery
true
```


### Example #2
Annak ellenőrzése, hogy a 82 páratlan szám-e
```powerquery
Number.IsOdd(82)
```

Result: 
```powerquery
false
```




## Category
Number.Information

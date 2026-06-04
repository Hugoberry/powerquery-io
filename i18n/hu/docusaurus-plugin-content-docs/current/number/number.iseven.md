---
title: Number.IsEven
---

# Number.IsEven


Azt jelzi, hogy az érték páros-e.


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Remarks

Azt jelzi, hogy a(z) `number` érték páros-e: ha páros, `true` értéket ad vissza, egyéb esetben `false` értéket.


## Examples

### Example #1
Annak ellenőrzése, hogy a 625 páros szám-e
```powerquery
Number.IsEven(625)
```

Result: 
```powerquery
false
```


### Example #2
Annak ellenőrzése, hogy a 82 páros szám-e
```powerquery
Number.IsEven(82)
```

Result: 
```powerquery
true
```




## Category
Number.Information

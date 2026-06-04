---
title: Number.IsOdd
---

# Number.IsOdd


Značí, zda je hodnota lichá.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Remarks

Značí, zda je hodnota lichá. Pokud je hodnota `number` liché číslo, vrátí hodnotu `true`. Jinak vrátí hodnotu `false`.


## Examples

### Example #1
Zjistí, zda je číslo 625 liché.
```powerquery
Number.IsOdd(625)
```

Result: 
```powerquery
true
```


### Example #2
Zjistí, zda je číslo 82 liché.
```powerquery
Number.IsOdd(82)
```

Result: 
```powerquery
false
```




## Category
Number.Information

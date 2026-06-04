---
title: Number.IsEven
---

# Number.IsEven


Značí, zda je hodnota sudá.


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Remarks

Značí, zda je hodnota `number` sudá. Pokud ano, vrátí hodnotu `true`, jinak vrátí hodnotu `false`.


## Examples

### Example #1
Zjistí, zda je číslo 625 sudé.
```powerquery
Number.IsEven(625)
```

Result: 
```powerquery
false
```


### Example #2
Zjistí, zda je číslo 82 sudé.
```powerquery
Number.IsEven(82)
```

Result: 
```powerquery
true
```




## Category
Number.Information

---
title: Number.IsEven
---

# Number.IsEven


Udáva, či je hodnota párna.


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Remarks

Udáva, či je hodnota `number` párna. Ak je párna, vráti hodnotu `true`, inak vráti hodnotu `false`.


## Examples

### Example #1
Skontrolujte, či je číslo 625 párne.
```powerquery
Number.IsEven(625)
```

Result: 
```powerquery
false
```


### Example #2
Skontrolujte, či je číslo 82 párne.
```powerquery
Number.IsEven(82)
```

Result: 
```powerquery
true
```




## Category
Number.Information

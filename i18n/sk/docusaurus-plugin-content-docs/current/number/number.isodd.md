---
title: Number.IsOdd
---

# Number.IsOdd


Udáva, či je hodnota nepárna.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Remarks

Udáva, či je hodnota nepárna. Vráti hodnotu `true`, ak `number` je nepárne číslo, inak vráti hodnotu `false`.


## Examples

### Example #1
Skontrolujte, či je číslo 625 nepárne.
```powerquery
Number.IsOdd(625)
```

Result: 
```powerquery
true
```


### Example #2
Skontrolujte, či je číslo 82 nepárne.
```powerquery
Number.IsOdd(82)
```

Result: 
```powerquery
false
```




## Category
Number.Information

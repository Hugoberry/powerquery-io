---
title: Number.IsOdd
---

# Number.IsOdd


## Description

Udáva, či je hodnota nepárna.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Details

Udáva, či je hodnota nepárna. Vráti hodnotu <code>true</code>, ak <code>number</code> je nepárne číslo, inak vráti hodnotu <code>false</code>.


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

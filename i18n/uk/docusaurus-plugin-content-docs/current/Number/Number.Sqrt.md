---
title: Number.Sqrt
---

# Number.Sqrt


## Description

Повертає корінь квадратний числа.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Details

Повертає корінь квадратний <code>number</code>.    Якщо <code>number</code> має Null-значення, <code>Number.Sqrt</code> повертає Null-значення. Якщо це від’ємне значення, повертається <code>Number.NaN</code> (не число).


## Examples

### Example #1 
Знайти корінь квадратний 625.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2 
Знайти корінь квадратний 85.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations

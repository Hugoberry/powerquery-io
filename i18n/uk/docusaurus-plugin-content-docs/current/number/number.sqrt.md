---
title: Number.Sqrt
---

# Number.Sqrt


Повертає корінь квадратний числа.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

Повертає корінь квадратний `number`. Якщо `number` має Null-значення, `Number.Sqrt` повертає Null-значення. Якщо це від’ємне значення, повертається `Number.NaN` (не число).


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

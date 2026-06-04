---
title: Number.IsOdd
---

# Number.IsOdd


Вказує, чи значення непарне.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Remarks

Вказує, чи значення непарне. Повертає значення `true`, якщо `number` –непарне число, і значення `false` – у протилежному випадку.


## Examples

### Example #1
Перевірити, чи 625 – непарне число.
```powerquery
Number.IsOdd(625)
```

Result: 
```powerquery
true
```


### Example #2
Перевірити, чи 82 – непарне число.
```powerquery
Number.IsOdd(82)
```

Result: 
```powerquery
false
```




## Category
Number.Information

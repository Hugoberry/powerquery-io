---
title: Number.IsOdd
---

# Number.IsOdd


## Description

Вказує, чи значення непарне.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Details

Вказує, чи значення непарне. Повертає значення <code>true</code>, якщо <code>number</code> –непарне число, і значення <code>false</code> – у протилежному випадку.


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

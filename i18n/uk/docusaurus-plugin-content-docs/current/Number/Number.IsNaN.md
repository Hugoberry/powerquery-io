---
title: Number.IsNaN
---

# Number.IsNaN


## Description

Вказує, чи значення є не числом.


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Details

Вказує, чи значення є не числом. Повертає значення <code>true</code>, якщо <code>number</code> еквівалентно <code>Number.IsNaN</code>, і значення <code>false</code> – у протилежному випадку.


## Examples

### Example #1 
Перевірити, чи 0 поділено на 0 є не числом.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2 
Перевірити, чи 1 поділено на 0 є не числом.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information

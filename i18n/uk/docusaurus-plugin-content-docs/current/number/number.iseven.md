---
title: Number.IsEven
---

# Number.IsEven


Вказує, чи значення парне.


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Remarks

Вказує, чи значення, `number`, парне, повертаючи значення `true`, якщо воно парне, і значення `false` – у протилежному випадку.


## Examples

### Example #1
Перевірити, чи 625 – парне число.
```powerquery
Number.IsEven(625)
```

Result: 
```powerquery
false
```


### Example #2
Перевірити, чи 82 – парне число.
```powerquery
Number.IsEven(82)
```

Result: 
```powerquery
true
```




## Category
Number.Information

---
title: Number.IsEven
---

# Number.IsEven


## Description

Вказує, чи значення парне.


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Details

Вказує, чи значення, <code>number</code>, парне, повертаючи значення <code>true</code>, якщо воно парне, і значення <code>false</code> – у протилежному випадку.


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

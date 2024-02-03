---
title: Number.IsOdd
---

# Number.IsOdd


## Description

Указывает, нечетно ли число.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Details

Указывает, нечетно ли число. Возвращает <code>true</code>, если <code>number</code> - нечетное число, <code>false</code> - в противном случае.


## Examples

### Example #1 
Проверить, нечетно ли число 625.
```powerquery
Number.IsOdd(625)
```

Result: 
```powerquery
true
```


### Example #2 
Проверить, нечетно ли число 82.
```powerquery
Number.IsOdd(82)
```

Result: 
```powerquery
false
```




## Category
Number.Information

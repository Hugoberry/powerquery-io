---
title: Number.IsOdd
---

# Number.IsOdd


Указывает, нечетно ли число.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Remarks

Указывает, нечетно ли число. Возвращает `true`, если `number` - нечетное число, `false` - в противном случае.


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

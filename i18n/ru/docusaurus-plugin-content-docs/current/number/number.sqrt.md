---
title: Number.Sqrt
---

# Number.Sqrt


Возвращает квадратный корень числа.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Remarks

Возвращает квадратный корень числа `number`. Если `number` имеет значение NULL, `Number.Sqrt` возвращает NULL. Если это отрицательное значение, возвращается значение `Number.NaN` (нечисловое).


## Examples

### Example #1
Найти квадратный корень числа 625.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2
Найти квадратный корень числа 85.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations

---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


Возвращает функцию сравнения без учета регистра, использующую при сравнении значений правила Ordinal.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Remarks

Возвращает функцию сравнения без учета регистра, использующую порядковые правила для сравнения указанных значений `x` и `y`.  
  
Функция сравнения принимает два аргумента и возвращает –1, 0 или 1, если первое значение соответственно меньше второго, равно ему или больше него.


## Examples

### Example #1
Используя правила Ordinal без учета регистра, сравним "Abc" с "abc". Обратите внимание, что "Abc" считается меньше "abc", если использовать `Comparer.Ordinal`.
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer

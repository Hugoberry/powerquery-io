---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Возвращает функцию сравнения, использующую порядковые правила для сравнения значений.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Возвращает функцию сравнения, использующую порядковые правила для сравнения указанных значений `x` и `y`.  
  
Функция сравнения принимает два аргумента и возвращает –1, 0 или 1, если первое значение соответственно меньше второго, равно ему или больше него.


## Examples

### Example #1
Используя порядковые правила, выяснить, эквивалентны ли значения "encyclopædia" и "encyclopaedia". Обратите внимание, что они эквивалентны при использовании `Comparer.FromCulture("en-US")`.
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer

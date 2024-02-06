---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


Возвращает функцию, которая объединяет список текстовых элементов, используя заданные значения позиций и длины.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Remarks

Возвращает функцию, которая объединяет список текстовых значений в одно текстовое значение, используя заданные значения выходных позиций и длины. Нулевая длина означает, что будет включено все текстовое значение.


## Examples

### Example #1 
Объединение списка текстовых значений, используя заданные значения выходных позиций и длины.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner

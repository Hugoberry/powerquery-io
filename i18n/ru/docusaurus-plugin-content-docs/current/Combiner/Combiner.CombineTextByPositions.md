---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


## Description

Возвращает функцию, которая объединяет список текстовых значений с использованием указанных выходных позиций.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Details

Возвращает функцию, которая объединяет список текстовых значений в одно текстовое значение, используя заданные значения выходных позиций.


## Examples

### Example #1 
Объединение списка текстовых значений путем их размещения в выходных данных в указанных позициях.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner

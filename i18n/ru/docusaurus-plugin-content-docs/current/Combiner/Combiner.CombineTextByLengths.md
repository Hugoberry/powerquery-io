---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


## Description

Возвращает функцию, которая объединяет список текстовых значений с использованием указанных значений длины.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Details

Возвращает функцию, которая объединяет список текстовых значений в одно текстовое значение с использованием заданных значений длины.


## Examples

### Example #1 
Объединение списка текстовых значений путем извлечения указанного числа символов из каждого входного значения.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
Объединение списка текстовых значений путем извлечения указанного числа символов после предварительного заполнения результата текстом шаблона.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner

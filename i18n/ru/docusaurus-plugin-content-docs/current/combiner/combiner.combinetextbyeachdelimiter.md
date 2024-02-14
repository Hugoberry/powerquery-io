---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


Возвращает функцию, которая объединяет список текстовых значений с помощью последовательности разделителей.


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Возвращает функцию, которая объединяет список текстовых значений в одно текстовое значение с использованием последовательности разделителей.


## Examples

### Example #1 
Объединение списка текстовых значений с использованием последовательности разделителей.
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner

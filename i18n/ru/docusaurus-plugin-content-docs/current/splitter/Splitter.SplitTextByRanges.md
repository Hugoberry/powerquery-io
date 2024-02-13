---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


Возвращает функцию, которая разбивает текст на текстовый список по заданным значениям смещения и длины.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Remarks

Возвращает функцию, которая разделяет текст на список текстовых элементов в соответствии с заданными значениями смещения и длины. Нулевая длина означает, что будет включен весь оставшийся входной текст.


## Examples

### Example #1 
Разделение входных данных по указанным парам позиции и длины с начала входных данных. Обратите внимание, что диапазоны в этом примере перекрываются.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
Разделение входных данных по указанным парам позиции и длины начиная с конца входных данных.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByRanges({{0, 5}, {6, 2}}, startAtEnd)("RedmondWA?98052")
```

Result: 
```powerquery
{"WA", "98052"}
```


### Example #3 
Разделить входные данные на почтовый индекс фиксированной длины, за которым следует название города переменной длины.
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter

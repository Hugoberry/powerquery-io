---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


## Description

Возвращает функцию, которая разбивает текст на текстовый список в цикле, после каждого отрезка указанной длины.


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Details

Возвращает функцию, которая разбивает текст на текстовый список в цикле, после каждого отрезка указанной длины.


## Examples

### Example #1 
Повторяющееся разделение входных данных на блоки из трех символов с начала входных данных.
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
Повторяющееся разделение входных данных на блоки из трех символов начиная с конца входных данных.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByRepeatedLengths(3, startAtEnd)("87654321")
```

Result: 
```powerquery
{"87", "654", "321"}
```




## Category
Splitter

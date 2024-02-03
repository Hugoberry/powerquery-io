---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


## Description

Возвращает функцию, которая разбивает текст на текстовый список по каждой указанной длине.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Details

Возвращает функцию, которая разбивает текст на текстовый список по каждой указанной длине.


## Examples

### Example #1 
Разделение входных данных на первые два символа, за которыми следует три следующих символа, с начала входных данных.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
Разделение входных данных на первые три символа, за которыми следует два следующих символа, начиная с конца входных данных.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByLengths({5, 2}, startAtEnd)("RedmondWA98052")
```

Result: 
```powerquery
{"WA", "98052"}
```




## Category
Splitter

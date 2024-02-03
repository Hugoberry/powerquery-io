---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


## Description

Возвращает функцию, которая разбивает текст на текстовый список по всем указанным позициям.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Details

Возвращает функцию, которая разбивает текст на текстовый список по всем указанным позициям.


## Examples

### Example #1 
Разделение входных данных по указанным позициям с начала входных данных.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
Разделение входных данных по указанным позициям начиная с конца входных данных.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByPositions({0, 5}, startAtEnd)("Redmond98052")
```

Result: 
```powerquery
{"Redmond", "98052"}
```




## Category
Splitter

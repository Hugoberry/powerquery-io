---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


## Description

Возвращает функцию, которая разбивает текст на текстовый список по пробелам.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Возвращает функцию, которая разбивает текст на текстовый список по пробелам.


## Examples

### Example #1 
Разделение входных данных пробелами с обработкой кавычек как любых других символов.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter

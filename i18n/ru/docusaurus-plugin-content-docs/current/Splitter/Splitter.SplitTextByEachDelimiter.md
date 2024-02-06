---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


Возвращает функцию, которая разбивает текст на текстовый список по всем заданным разделителям в последовательности.


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Remarks

Возвращает функцию, которая разбивает текст на текстовый список по всем заданным разделителям в последовательности.


## Examples

### Example #1 
Разделение входных данных по запятой, а затем по точке с запятой с начала входных данных.
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
Разделение входных данных по запятой, а затем по точке с запятой, обрабатывая кавычки как любые другие символы (начиная с конца входных данных).
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByEachDelimiter({",", ";"}, QuoteStyle.None, startAtEnd)("a,""b;c"",d")
```

Result: 
```powerquery
{"a,""b", "c""", "d"}
```




## Category
Splitter

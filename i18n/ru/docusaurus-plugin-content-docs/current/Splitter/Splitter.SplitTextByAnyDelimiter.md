---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


Возвращает функцию, которая разбивает текст на текстовый список по всем указанным разделителям.


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Remarks

Возвращает функцию, которая разбивает текст на текстовый список по всем указанным разделителям.


## Examples

### Example #1 
Разделение входных данных по запятой или точке с запятой, игнорируя кавычки и разделители в кавычках (с начала входных данных).
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
Разделение входных данных по запятой или точке с запятой, игнорируя кавычки и разделители в кавычках (начиная с конца входных данных).
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv, startAtEnd)("a,""b;c,d")
```

Result: 
```powerquery
{"a,b", "c", "d"}
```




## Category
Splitter

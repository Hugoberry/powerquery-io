---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


Возвращает функцию, которая разбивает текст на текстовый список в соответствии с указанным разделителем.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Возвращает функцию, которая разбивает текст на текстовый список в соответствии с указанным разделителем.


## Examples

### Example #1 
Разделение входных данных по запятой, игнорируя запятые в кавычках.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter

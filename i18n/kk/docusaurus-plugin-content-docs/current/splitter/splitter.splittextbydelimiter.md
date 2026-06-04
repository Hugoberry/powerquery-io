---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


Көрсетілген бөлгішке сай мәтінді мәтін тізіміне бөлетін функцияны қайтарады.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type,
    optional csvStyle as CsvStyle.Type
) as function
```


## Remarks

Көрсетілген бөлгішке сай мәтінді мәтін тізіміне бөлетін функцияны қайтарады.


## Examples

### Example #1
Кірісті үтір арқылы бөледі. Тырнақшаларға алынған үтірлерді елемейді.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter

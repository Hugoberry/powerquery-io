---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


## Description

Бос орында мәтінді мәтін тізіміне бөлетін функцияны қайтарады.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Бос орында мәтінді мәтін тізіміне бөлетін функцияны қайтарады.


## Examples

### Example #1 
Кірісті бос орын таңбаларымен бөледі. Тырнақшаларға кез келген басқа таңба сияқты қарайды.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter

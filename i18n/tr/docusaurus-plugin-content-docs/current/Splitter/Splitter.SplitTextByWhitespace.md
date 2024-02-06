---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


Bir metin listesine boşlukta metin ayıran bir işlev döndürür.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Bir metin listesine boşlukta metin ayıran bir işlev döndürür.


## Examples

### Example #1 
Tırnaklara diğer karakterler gibi davranarak girişi boşluk karakterleriyle bölün.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter

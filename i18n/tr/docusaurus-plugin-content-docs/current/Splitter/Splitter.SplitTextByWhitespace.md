---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


## Description

Bir metin listesine boşlukta metin ayıran bir işlev döndürür.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

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

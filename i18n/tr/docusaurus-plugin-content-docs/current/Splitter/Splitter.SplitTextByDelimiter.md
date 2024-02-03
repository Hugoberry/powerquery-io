---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


## Description

Bir metin listesine belirtilen sınırlayıcıya göre metin ayıran bir işlev döndürür.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Bir metin listesine belirtilen sınırlayıcıya göre metin ayıran bir işlev döndürür.


## Examples

### Example #1 
Tırnak işaretli virgülleri yok sayarak girişi virgülle bölün.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter

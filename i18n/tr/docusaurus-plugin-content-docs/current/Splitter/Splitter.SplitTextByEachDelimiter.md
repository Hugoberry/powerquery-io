---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


## Description

Bir metin listesine sırada belirtilen her sınırlayıcıda metin ayıran bir işlev döndürür.


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

Bir metin listesine sırada belirtilen her sınırlayıcıda metin ayıran bir işlev döndürür.


## Examples

### Example #1 
Girişi virgülle, ardından girişin başından başlayarak noktalı virgülle bölün.
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
Girişi virgülle, ardından noktalı virgülle, tırnak işaretlerini diğer herhangi bir karakter gibi ele alarak ve girişin sonundan başlayarak bölün.
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

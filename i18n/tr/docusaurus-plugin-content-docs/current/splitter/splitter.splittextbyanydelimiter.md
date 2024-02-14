---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


Bir metin listesine belirtilen sınırlayıcılardan birini kullanarak metin ayıran bir işlev döndürür.


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Remarks

Bir metin listesine belirtilen sınırlayıcılardan birini kullanarak metin ayıran bir işlev döndürür.


## Examples

### Example #1 
Tırnak işaretleri ve alıntı sınırlayıcıları yok sayarak ve girişin başından başlayarak girişi virgül veya noktalı virgülle bölün.
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
Tırnak işaretleri ve alıntı sınırlayıcıları yok sayarak ve girişin sonundan başlayarak girişi virgül veya noktalı virgülle bölün.
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

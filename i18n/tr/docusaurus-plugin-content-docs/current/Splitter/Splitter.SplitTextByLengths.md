---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


## Description

Bir metin listesine belirtilen her uzunlukta metin ayıran bir işlev döndürür.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Details

Bir metin listesine belirtilen her uzunlukta metin ayıran bir işlev döndürür.


## Examples

### Example #1 
Girişi, girişin başlangıcından başlayarak ilk iki karaktere ve ardından sonraki üç karaktere bölün.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
Girişin sonundan başlayarak girişi ilk üç karaktere ve ardından sonraki iki karaktere bölün.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByLengths({5, 2}, startAtEnd)("RedmondWA98052")
```

Result: 
```powerquery
{"WA", "98052"}
```




## Category
Splitter

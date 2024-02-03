---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


## Description

Bir metin listesine belirtilen her konumda metin ayıran bir işlev döndürür.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Details

Bir metin listesine belirtilen her konumda metin ayıran bir işlev döndürür.


## Examples

### Example #1 
Girişin başlangıcından başlayarak girişi belirtilen pozisyonlarda bölün.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
Girişin sonundan başlayarak girişi belirtilen pozisyonlarda bölün.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByPositions({0, 5}, startAtEnd)("Redmond98052")
```

Result: 
```powerquery
{"Redmond", "98052"}
```




## Category
Splitter

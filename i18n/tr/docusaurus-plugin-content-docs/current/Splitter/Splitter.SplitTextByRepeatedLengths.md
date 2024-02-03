---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


## Description

Bir metin listesine belirtilen uzunluktan sonra metin ayıran bir işlev döndürür.


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Details

Bir metin listesine belirtilen uzunluktan sonra metin ayıran bir işlev döndürür.


## Examples

### Example #1 
Girişin başlangıcından başlayarak girişi tekrar tekrar üç karakterlik parçalara bölün.
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
Girişin sonundan başlayarak girişi tekrar tekrar üç karakterlik parçalara bölün.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByRepeatedLengths(3, startAtEnd)("87654321")
```

Result: 
```powerquery
{"87", "654", "321"}
```




## Category
Splitter

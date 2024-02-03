---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


## Description

傳回函數，這個函數會按照每個指定的長度，將文字分割成文字清單。


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Details

傳回函數，這個函數會按照每個指定的長度，將文字分割成文字清單。


## Examples

### Example #1 
從輸入的開頭開始，將輸入分割為前兩個字元，後接後三個字元。
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
從輸入的結尾開始，將輸入分割為前三個字元，後接後兩個字元。
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

---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


## Description

指定された各長さでテキストを一連のテキストに分割する関数を返します。


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Details

指定された各長さでテキストを一連のテキストに分割する関数を返します。


## Examples

### Example #1 
入力の先頭から始め、入力を最初は 2 文字で分割し、次けて 3 文字で分割します。
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
入力の末尾から始め、入力を最初は 2 文字で分割し、次けて 3 文字で分割します。
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

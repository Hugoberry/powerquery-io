---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


## Description

指定された長さごとにテキストを一連のテキストに分割する関数を返します。


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Details

指定された長さごとにテキストを一連のテキストに分割する関数を返します。


## Examples

### Example #1 
入力の先頭から始め、3 文字のチャンクに分割することを、繰り返して実行します。
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
入力の末尾から始め、入力を 3 文字のチャンクに分割することを繰り返し実行します。
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

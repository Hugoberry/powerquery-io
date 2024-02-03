---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


## Description

指定された各位置でテキストを一連のテキストに分割する関数を返します。


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Details

指定された各位置でテキストを一連のテキストに分割する関数を返します。


## Examples

### Example #1 
入力の先頭から始め、指定された位置で入力を分割します。
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
入力の末尾から始め、指定された位置で入力を分割します。
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

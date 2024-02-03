---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


## Description

傳回函數，這個函數會在每個指定的位置，將文字分割成文字清單。


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Details

傳回函數，這個函數會在每個指定的位置，將文字分割成文字清單。


## Examples

### Example #1 
從輸入的開頭開始，在指定位置分割輸入。
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
從輸入的結尾開始，在指定位置分割輸入。
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
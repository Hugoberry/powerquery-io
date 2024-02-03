---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


## Description

傳回函數，這個函數會根據指定的位移和長度，將文字分割成文字清單。


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Details

會根據指定的位移和長度傳回將文字分割成文字清單的函數。Null 長度表示應該包含所有剩餘的輸入。


## Examples

### Example #1 
從輸入的開頭開始，按指定位置和長度分割輸入。請注意，本例中的範圍重疊。
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
從輸入的結尾開始，依指定位置和長度分割輸入。
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByRanges({{0, 5}, {6, 2}}, startAtEnd)("RedmondWA?98052")
```

Result: 
```powerquery
{"WA", "98052"}
```


### Example #3 
將輸入分割為固定長度的郵遞區號，後面接著可變長度的城市名稱。
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter

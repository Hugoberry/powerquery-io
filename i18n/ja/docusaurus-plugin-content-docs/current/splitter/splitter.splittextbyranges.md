---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


指定されたオフセットと長さに従ってテキストを一連のテキストに分割する関数を返します。


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Remarks

指定されたオフセットと長さに従ってテキストをテキストのリストに分割する関数を返します。長さを null にすると、残りのすべての入力を含める必要があることを指定できます。


## Examples

### Example #1 
入力の先頭から始め、指定された位置と長さのペアで入力を分割します。この例において、その範囲は重複しています。
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
入力の末尾から始まり、指定された位置と長さのペアで入力を分割します。
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
入力を固定長の郵便番号に分割し、その後に可変長の市区町村名を指定します。
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter

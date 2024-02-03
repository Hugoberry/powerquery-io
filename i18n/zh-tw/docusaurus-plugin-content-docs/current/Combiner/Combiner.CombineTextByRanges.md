---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


## Description

傳回函式，其會使用指定的位置和長度結合文字清單。


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Details

傳回函式，其會使用指定的位置和長度傳回結合文字值清單為單一文字值。Null 長度表示應包含整個文字值。


## Examples

### Example #1 
使用指定的輸出位置和長度結合文字值清單。
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner

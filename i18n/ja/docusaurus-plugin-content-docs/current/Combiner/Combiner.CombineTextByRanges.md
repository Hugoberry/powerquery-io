---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


## Description

指定された位置と長さを使用してテキストのリストを結合する関数を返します。


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Details

指定された出力位置と長さを使用して、テキスト値のリストを 1 つのテキスト値に結合する関数を返します。長さを null にすると、テキスト値全体を含める必要があることを指定できます。


## Examples

### Example #1 
指定された出力位置と長さを使用して、テキスト値のリストを結合します。
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner

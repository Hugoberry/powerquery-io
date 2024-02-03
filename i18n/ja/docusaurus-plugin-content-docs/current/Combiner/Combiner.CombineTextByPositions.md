---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


## Description

指定された出力位置を使用してテキストのリストに結合する関数を返します。


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Details

指定した出力位置を使用して、テキスト値のリストを 1 つのテキスト値に結合する関数を返します。


## Examples

### Example #1 
指定された位置に出力に配置して、テキスト値のリストを結合します。
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner

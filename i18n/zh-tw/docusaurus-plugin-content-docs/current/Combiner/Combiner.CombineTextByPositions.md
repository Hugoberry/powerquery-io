---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


## Description

傳回函式，其會使用指定的輸出位置結合文字清單。


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Details

傳回函式，其會使用指定的輸出位置結合文字值清單為單一文字值。


## Examples

### Example #1 
結合文字值的清單，方法是將其放在輸出中的指定位置。
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner

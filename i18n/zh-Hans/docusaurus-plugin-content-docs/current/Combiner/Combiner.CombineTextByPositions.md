---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


## Description

返回一个函数，它使用指定的输出位置将文本列表合并。


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Details

返回一个函数，它使用指定的输出位置将文本值列表合并成单个文本值。


## Examples

### Example #1 
通过将文本值放在指定位置的输出中来合并文本值列表。
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner

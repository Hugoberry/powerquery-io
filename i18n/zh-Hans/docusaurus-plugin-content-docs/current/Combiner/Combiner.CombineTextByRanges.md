---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


返回一个函数，它使用指定的位置和长度将文本列表合并。


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Remarks

返回一个函数，该函数使用指定的输出位置和长度将文本值列表合并为单个文本值。null 长度指示整个文本值都应被包含。


## Examples

### Example #1 
使用指定的输出位置和长度将文本值列表合并。
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner

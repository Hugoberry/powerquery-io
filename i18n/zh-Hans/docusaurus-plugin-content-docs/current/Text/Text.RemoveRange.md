---
title: Text.RemoveRange
---

# Text.RemoveRange


以给定的偏移量开始删除某个数量的字符


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

返回文本值 <code>text</code> 已删除了位置 <code>offset</code> 的所有字符的副本。    可选参数 <code>count</code> 可用于指定要删除的字符数。<code>count</code> 的默认值为 1。位置值从 0 开始。


## Examples

### Example #1 
从文本值 &#34;ABEFC&#34; 的位置 2 删除 1 个字符。
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2 
从文本值 &#34;ABEFC&#34; 中删除从位置 2 开始的两个字符。
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification

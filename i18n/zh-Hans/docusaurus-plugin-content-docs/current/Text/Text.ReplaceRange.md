---
title: Text.ReplaceRange
---

# Text.ReplaceRange


## Description

删除一系列字符并在指定的位置插入新值。


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Details

返回从文本值 <code>text</code> 中的位置 <code>offset</code> 开始删除一些字符 <code>count</code>，然后在 <code>text</code> 中的相同位置插入文本值 <code>newText</code> 的结果。


## Examples

### Example #1 
使用新文本值 &#34;CDE&#34; 替换文本值 &#34;ABGF&#34; 中位置 2 的单个字符。
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification

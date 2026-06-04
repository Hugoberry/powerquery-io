---
title: Text.ReplaceRange
---

# Text.ReplaceRange


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


## Remarks

返回从文本值 `text` 中的位置 `offset` 开始删除一些字符 `count`，然后在 `text` 中的相同位置插入文本值 `newText` 的结果。


## Examples

### Example #1
使用新文本值 "CDE" 替换文本值 "ABGF" 中位置 2 的单个字符。
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification

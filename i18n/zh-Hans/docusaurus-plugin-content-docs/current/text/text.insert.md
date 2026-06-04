---
title: Text.Insert
---

# Text.Insert


将一个文本值插入到另一个文本值的给定位置。


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

返回将文本值 `newText` 插入到文本值 `text` 中的位置 `offset` 的结果。位置从数字 0 开始。


## Examples

### Example #1
在 "ABD" 中的 "B" 和 "D" 之间插入 "C"。
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification

---
title: Text.ReplaceRange
---

# Text.ReplaceRange


移除某個範圍的字元並在指定的位置插入新的值。


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

傳回從文字值 `text` 中移除一些字元 `count` (從位置 `offset` 開始)，然後在 `text` 中的相同位置插入文字值 `newText` 的結果。


## Examples

### Example #1
以新的文字值 "CDE" 取代文字值 "ABGF" 中位於位置 2 的單一字元。
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification

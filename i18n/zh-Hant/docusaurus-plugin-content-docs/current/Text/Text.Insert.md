---
title: Text.Insert
---

# Text.Insert


將某個文字值插入另一個文字值的指定位置。


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

傳回將文字值 `newText` 插入文字值 `text` 之位置 `offset` 的結果。位置從數字 0 開始。


## Examples

### Example #1
在 "ABD" 的 "B" 與 "D" 之間插入 "C"。
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification

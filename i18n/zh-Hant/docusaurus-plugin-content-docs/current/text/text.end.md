---
title: Text.End
---

# Text.End


傳回文字的最後幾個字元。


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

傳回 `text` 值，這是 `text` 值 `text` 的最後 `count` 個字元。


## Examples

### Example #1
取得文字 "Hello, World" 的最後 5 個字元。
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction

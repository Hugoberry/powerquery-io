---
title: Text.Select
---

# Text.Select


從輸入文字值中選取所有出現的指定字元或字元清單。


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Remarks

傳回文字值 `text` 的複本，並移除不在 `selectChars` 內的所有字元。


## Examples

### Example #1
從文字值中選取在 'a' 到 'z' 範圍中的所有字元。
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification

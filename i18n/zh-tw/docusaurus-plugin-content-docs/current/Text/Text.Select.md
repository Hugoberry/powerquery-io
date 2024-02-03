---
title: Text.Select
---

# Text.Select


## Description

從輸入文字值中選取所有出現的指定字元或字元清單。


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Details

傳回文字值 <code>text</code> 的複本，並移除不在 <code>selectChars</code> 內的所有字元。  


## Examples

### Example #1 
從文字值中選取在 &#39;a&#39; 到 &#39;z&#39; 範圍中的所有字元。
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification

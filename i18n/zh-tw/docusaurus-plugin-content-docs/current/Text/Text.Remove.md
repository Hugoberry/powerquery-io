---
title: Text.Remove
---

# Text.Remove


## Description

從輸入文字值中移除所有出現的指定字元或字元清單。


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Details

傳回文字值 <code>text</code> 的複本，並移除 <code>removeChars</code> 的所有字元。


## Examples

### Example #1 
從文字值中移除 , 和 ; 字元。
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification

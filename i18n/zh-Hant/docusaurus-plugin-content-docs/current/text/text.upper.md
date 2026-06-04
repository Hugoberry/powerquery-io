---
title: Text.Upper
---

# Text.Upper


將所有字元轉換成大寫。


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Remarks

傳回將 `text` 中所有字元轉換成大寫的結果。也可提供選用的 `culture` (例如 "en-US")。


## Examples

### Example #1
取得 "aBcD" 的大寫版本。
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations

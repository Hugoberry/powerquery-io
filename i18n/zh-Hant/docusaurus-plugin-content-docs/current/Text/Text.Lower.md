---
title: Text.Lower
---

# Text.Lower


將所有字元轉換成小寫。


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

傳回將 `text` 中所有字元轉換成小寫的結果。也可提供選用的 `culture` (例如 "en-US")。


## Examples

### Example #1
取得 "AbCd" 的小寫版本。
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations

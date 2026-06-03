---
title: Text.At
---

# Text.At


傳回位於指定位置的字元。


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

傳回文字值 `text` 中位於位置 `index` 的字元。文字中的第一個字元位於位置 0。


## Examples

### Example #1
尋找字串 "Hello, World" 中位於位置 4 的字元。
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction

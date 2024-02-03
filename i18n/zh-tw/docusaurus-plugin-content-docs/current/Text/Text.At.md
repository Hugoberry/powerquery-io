---
title: Text.At
---

# Text.At


## Description

傳回位於指定位置的字元。


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Details

傳回文字值 <code>text</code> 中位於位置 <code>index</code> 的字元。文字中的第一個字元位於位置 0。


## Examples

### Example #1 
尋找字串 &#34;Hello, World&#34; 中位於位置 4 的字元。
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction

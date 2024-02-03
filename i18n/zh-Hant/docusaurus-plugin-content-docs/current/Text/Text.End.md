---
title: Text.End
---

# Text.End


## Description

傳回文字的最後幾個字元。


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Details

傳回 <code>text</code> 值，這是 <code>text</code> 值 <code>text</code> 的最後 <code>count</code> 個字元。


## Examples

### Example #1 
取得文字 &#34;Hello, World&#34; 的最後 5 個字元。
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction

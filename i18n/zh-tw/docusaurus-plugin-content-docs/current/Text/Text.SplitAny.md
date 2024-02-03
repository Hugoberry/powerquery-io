---
title: Text.SplitAny
---

# Text.SplitAny


## Description

傳回文字值的清單 (在分隔符號中的任何字元處分割)。


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Details

傳回文字值的清單，這是根據指定之分隔符號 <code>separators</code> 中的任何字元分割文字值 <code>text</code> 所產生的結果。


## Examples

### Example #1 
根據文字值 &#34;Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com&#34; 建立清單。
```powerquery
Text.SplitAny("Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com", "|")
```

Result: 
```powerquery
{
    "Jamie",
    "Campbell",
    "Admin",
    "Adventure Works",
    "www.adventure-works.com"
}
```




## Category
Text.Transformations

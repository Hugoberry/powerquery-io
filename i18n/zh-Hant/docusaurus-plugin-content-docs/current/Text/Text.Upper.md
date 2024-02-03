---
title: Text.Upper
---

# Text.Upper


## Description

將所有字元轉換成大寫。


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Details

傳回將 <code>text</code> 中所有字元轉換成大寫的結果。也可提供選用的 <code>culture</code> (例如 "en-US")。


## Examples

### Example #1 
取得 &#34;aBcD&#34; 的大寫版本。
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations

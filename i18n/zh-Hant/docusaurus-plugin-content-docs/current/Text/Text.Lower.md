---
title: Text.Lower
---

# Text.Lower


## Description

將所有字元轉換成小寫。


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Details

傳回將 <code>text</code> 中所有字元轉換成小寫的結果。也可提供選用的 <code>culture</code> (例如 "en-US")。


## Examples

### Example #1 
取得 &#34;AbCd&#34; 的小寫版本。
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations

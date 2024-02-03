---
title: Text.Split
---

# Text.Split


## Description

根據指定的分隔符號，將文字分割成文字值的清單。


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Details

傳回文字值的清單，這是根據指定的分隔符號 <code>separator</code> 分割文字值 <code>text</code> 所產生的結果。


## Examples

### Example #1 
根據 &#34;|&#34; 分隔的文字值 &#34;Name|Address|PhoneNumber&#34; 建立清單。
```powerquery
Text.Split("Name|Address|PhoneNumber", "|")
```

Result: 
```powerquery
{
    "Name",
    "Address",
    "PhoneNumber"
}
```




## Category
Text.Transformations

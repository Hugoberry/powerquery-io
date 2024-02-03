---
title: Text.Split
---

# Text.Split


## Description

基于指定的分隔符将文本拆分为文本值列表。


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Details

返回根据指定的分隔符 <code>separator</code> 拆分文本值 <code>text</code> 而得到的文本值列表。


## Examples

### Example #1 
从由 &#34;|&#34; 分隔的文本值 &#34;Name|Address|PhoneNumber&#34; 创建列表。
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

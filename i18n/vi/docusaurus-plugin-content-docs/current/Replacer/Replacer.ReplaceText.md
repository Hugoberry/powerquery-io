---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


## Description

Thay thế văn bản trong đầu vào được cung cấp.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Thay thế văn bản <code>old</code> trong <code>text</code> gốc bằng văn bản <code>new</code>. Có thể sử dụng hàm thay thế này trong <code>List.ReplaceValue</code> và <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Thay thế văn bản &#34;hE&#34; bằng &#34;He&#34; trong chuỗi &#34;hEllo world&#34;.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer

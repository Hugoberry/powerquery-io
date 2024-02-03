---
title: Text.ToList
---

# Text.ToList


## Description

Trả về danh sách giá trị ký tự từ giá trị văn bản cho sẵn.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Details

Trả về danh sách giá trị ký tự từ giá trị văn bản cho sẵn <code>text</code>.


## Examples

### Example #1 
Tạo danh sách giá trị ký tự từ văn bản &#34;Hello World&#34;.
```powerquery
Text.ToList("Hello World")
```

Result: 
```powerquery
{
    "H",
    "e",
    "l",
    "l",
    "o",
    " ",
    "W",
    "o",
    "r",
    "l",
    "d"
}
```




## Category
Text.Conversions from and to text

---
title: Text.ToList
---

# Text.ToList


Trả về danh sách giá trị ký tự từ giá trị văn bản cho sẵn.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Remarks

Trả về danh sách giá trị ký tự từ giá trị văn bản cho sẵn `text`.


## Examples

### Example #1
Tạo danh sách giá trị ký tự từ văn bản "Hello World".
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

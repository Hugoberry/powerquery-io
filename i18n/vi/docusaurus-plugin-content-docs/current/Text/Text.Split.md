---
title: Text.Split
---

# Text.Split


Tách văn bản thành danh sách giá trị văn bản dựa trên dấu tách được chỉ định.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Remarks

Trả về danh sách giá trị văn bản là kết quả của việc tách một giá trị văn bản <code>text</code> dựa trên dấu tách được chỉ định, <code>separator</code>.


## Examples

### Example #1 
Tạo một danh sách từ giá trị văn bản &#34;Name|Address|PhoneNumber&#34; được phân tách bằng &#34;|&#34;.
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

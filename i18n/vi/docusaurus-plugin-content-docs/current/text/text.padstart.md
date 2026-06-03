---
title: Text.PadStart
---

# Text.PadStart


Trả về văn bản có độ dài được chỉ định bằng cách đệm phần đầu của văn bản cho sẵn.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Remarks

Trả về giá trị `text` được đệm tới độ dài `count` bằng cách chèn dấu cách vào đầu giá trị văn bản `text`. Có thể dùng ký tự tùy chọn `character` để chỉ định ký tự dùng để đệm. Ký tự đệm mặc định là dấu cách.


## Examples

### Example #1
Đệm phần đầu của giá trị văn bản để đạt độ dài 10 ký tự.
```powerquery
Text.PadStart("Name", 10)
```

Result: 
```powerquery
"      Name"
```


### Example #2
Đệm phần đầu của giá trị văn bản bằng "|" để đạt độ dài 10 ký tự.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations

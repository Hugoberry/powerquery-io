---
title: Text.PadStart
---

# Text.PadStart


## Description

Trả về văn bản có độ dài được chỉ định bằng cách đệm phần đầu của văn bản cho sẵn.


## Syntax

```powerquery
Text.PadStart(
    text as text,
    count as number,
    optional character as text
) as text
```


## Details

Trả về giá trị <code>text</code> được đệm tới độ dài <code>count</code> bằng cách chèn dấu cách vào đầu giá trị văn bản <code>text</code>.    Có thể dùng ký tự tùy chọn <code>character</code> để chỉ định ký tự dùng để đệm. Ký tự đệm mặc định là dấu cách.


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
Đệm phần đầu của giá trị văn bản bằng &#34;|&#34; để đạt độ dài 10 ký tự.
```powerquery
Text.PadStart("Name", 10, "|")
```

Result: 
```powerquery
"||||||Name"
```




## Category
Text.Transformations

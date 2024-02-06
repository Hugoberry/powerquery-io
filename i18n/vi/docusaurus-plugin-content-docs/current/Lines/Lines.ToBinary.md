---
title: Lines.ToBinary
---

# Lines.ToBinary


Chuyển đổi một danh sách văn bản thành một giá trị nhị phân bằng cách sử dụng mã hóa và lineSeparator được chỉ định. LineSeparator được chỉ định được chắp thêm vào mỗi dòng.  Nếu không được chỉ định thì dấu xuống dòng và ký tự chuyển dòng được sử dụng.


## Syntax

```powerquery
Lines.ToBinary(
    lines as list,
    optional lineSeparator as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Remarks

Chuyển đổi một danh sách văn bản thành một giá trị nhị phân bằng cách sử dụng mã hóa và lineSeparator được chỉ định. LineSeparator được chỉ định được chắp thêm vào mỗi dòng.  Nếu không được chỉ định thì dấu xuống dòng và ký tự chuyển dòng được sử dụng.



## Category
Lines

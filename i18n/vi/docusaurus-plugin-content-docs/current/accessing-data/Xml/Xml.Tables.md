---
title: Xml.Tables
---

# Xml.Tables


Trả về nội dung của tài liệu XML ở dạng một tập hợp lồng nhau của các bảng được làm phẳng.


## Syntax

```powerquery
Xml.Tables(
    contents as any,
    optional options as record,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

Trả về nội dung của tài liệu XML ở dạng một tập hợp lồng nhau của các bảng được làm phẳng.


## Examples

### Example #1 
Truy xuất nội dung của tệp xml cục bộ.
```powerquery
Xml.Tables(File.Contents("C:\invoices.xml"))
```

Result: 
```powerquery
table
```




## Category
Accessing data

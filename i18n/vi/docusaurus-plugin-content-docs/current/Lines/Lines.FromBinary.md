---
title: Lines.FromBinary
---

# Lines.FromBinary


## Description

Chuyển đổi giá trị nhị phân thành một danh sách giá trị văn bản được tách tại ngắt dòng.  Nếu kiểu trích dẫn đã được chỉ định thì ngắt dòng có thể xuất hiện trong dấu ngoặc kép.  Nếu includeLineSeparators là true thì ký tự ngắt dòng sẽ được bao gồm trong văn bản.


## Syntax

```powerquery
Lines.FromBinary(
    binary as binary,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical,
    optional encoding as TextEncoding.Type
) as list
```


## Details

Chuyển đổi giá trị nhị phân thành một danh sách giá trị văn bản được tách tại ngắt dòng.  Nếu kiểu trích dẫn đã được chỉ định thì ngắt dòng có thể xuất hiện trong dấu ngoặc kép.  Nếu includeLineSeparators là true thì ký tự ngắt dòng sẽ được bao gồm trong văn bản.



## Category
Lines

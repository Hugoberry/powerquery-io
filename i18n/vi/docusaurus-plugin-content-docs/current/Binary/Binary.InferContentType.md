---
title: Binary.InferContentType
---

# Binary.InferContentType


## Description

Đọc luồng nhị phân và cố xác định loại nội dung và thông tin định dạng của luồng.


## Syntax

```powerquery
Binary.InferContentType(
    source as binary
) as record
```


## Details

Trả về một bản ghi có trường Content.Type chứa loại MIME được suy ra.     Nếu loại nội dung được suy ra là văn bản/\* cũng như phát hiện một trang mã cho quá trình mã hóa, thì sẽ trả về thêm trường Content.Encoding có chứa mã hóa của luồng.    Nếu loại nội dung được suy ra là văn bản/csv và định dạng được phân tách, thì sẽ trả về thêm trường Csv.PotentialDelimiter có chứa bảng phân tích các dấu phân tách tiềm ẩn.    Nếu loại nội dung được suy ra là văn bản/csv và định dạng có chiều rộng cố định, thì sẽ trả về thêm trường Csv.PotentialPositions có chứa danh sách phân tích các vị trí cột có chiều rộng cố định tiềm ẩn.



## Category
Binary

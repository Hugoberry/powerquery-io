---
title: Pdf.Tables
---

# Pdf.Tables


Trả về bất kỳ bảng nào được tìm thấy trong tệp PDF.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Remarks

Trả về mọi bảng tìm thấy trong `pdf`. Có thể cung cấp tham số bản ghi tùy chọn, `options`, để chỉ định các thuộc tính bổ sung. Bản ghi có thể chứa những trường sau:

-   `Implementation` : Phiên bản thuật toán để dùng khi xác định các bảng. Các phiên bản cũ chỉ khả dụng cho tính tương thích ngược, để ngăn các truy vấn cũ bị hỏng bởi các bản cập nhật thuật toán. Phiên bản mới nhất phải luôn mang lại kết quả tốt nhất. Giá trị hợp lệ là "1.3", "1.2", "1.1" hoặc null.
-   `StartPage` : Chỉ định trang đầu tiên trong phạm vi trang cần kiểm tra. Mặc định: 1.
-   `EndPage` : Chỉ định trang cuối trong phạm vi trang cần kiểm tra. Mặc định: trang cuối của tài liệu.
-   `MultiPageTables` : Kiểm tra xem những bảng tương tự trên các trang liên tiếp có tự động kết hợp thành một bảng duy nhất không. Mặc định: true.
-   `EnforceBorderLines` : Kiểm tra xem đường viền có luôn được áp dụng làm ranh giới ô (nếu là true) không hay chỉ là một trong số nhiều gợi ý để xác định ranh giới ô (nếu là false). Mặc định: false.


## Examples

### Example #1
Trả về bảng có chứa trong sample.pdf.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#bảng({"Name", "Kind", "Data"}, ...)
```




## Category
Truy cập vào dữ liệu

---
title: Folder.Files
---

# Folder.Files


Trả về một bảng chứa thuộc tính và nội dung của các tệp cũng như thư mục tìm được trong thư mục và thư mục con được chỉ định.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

Trả về một bảng chứa một hàng cho mỗi tệp có trong thư mục được chỉ định và tất cả thư mục con trong đó.

-   `path`: Đường dẫn đến thư mục mà bạn muốn truy xuất tệp. Đường dẫn tới thư mục được cung cấp phải là đường dẫn hợp lệ hoàn toàn.
-   `options`: (Tùy chọn) Tham số này hiện chỉ dành cho mục đích sử dụng nội bộ.

Mỗi hàng của bảng được trả về chứa các thuộc tính của tệp và liên kết đến nội dung trong đó.


## Examples

### Example #1
Trả về một bảng chứa tất cả tệp được tìm thấy trong C:\\test-examples\\example-folder và tất cả thư mục con trong đó.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data

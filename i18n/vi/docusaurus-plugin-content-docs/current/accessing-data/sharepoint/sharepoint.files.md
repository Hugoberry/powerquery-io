---
title: SharePoint.Files
---

# SharePoint.Files


Trả về một bảng chứa tài liệu từ trang web SharePoint.


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Trả về một bảng có chứa hàng cho mỗi tài liệu được tìm thấy trên trang web SharePoint được chỉ định, `url` và các thư mục con. Mỗi hàng có chứa các thuộc tính của thư mục hoặc tệp và liên kết đến nội dung của thư mục hoặc tệp đó. Có thể chỉ định `options` để kiểm soát các tùy chọn sau:

-   `ApiVersion` : Một số (14 hoặc 15) hoặc văn bản "Auto" giúp chỉ định phiên bản API SharePoint cần sử dụng cho trang web này. Khi không được chỉ định, API phiên bản 14 sẽ được sử dụng. Khi Auto được chỉ định, phiên bản máy chủ sẽ được tự động phát hiện nếu có, nếu không, phiên bản được mặc định đặt về 14. Các trang web SharePoint không bằng tiếng Anh yêu cầu tối thiểu là phiên bản 15.



## Category
Accessing data

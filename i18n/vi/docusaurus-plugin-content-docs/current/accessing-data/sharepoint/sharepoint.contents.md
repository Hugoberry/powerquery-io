---
title: SharePoint.Contents
---

# SharePoint.Contents


Trả về một bảng chứa nội dung từ trang web SharePoint.


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Trả về một bàng có chứa hàng cho mỗi thư mục và tài liệu được tìm thấy trên trang web SharePoint được chỉ định, `url`. Mỗi hàng có chứa các thuộc tính của thư mục hoặc tệp và liên kết đến nội dung của thư mục hoặc tệp đó. Có thể chỉ định `options` để kiểm soát các tùy chọn sau:

-   `ApiVersion` : Một số (14 hoặc 15) hoặc văn bản "Auto" giúp chỉ định phiên bản API SharePoint cần sử dụng cho trang web này. Khi không được chỉ định, API phiên bản 14 sẽ được sử dụng. Khi Auto được chỉ định, phiên bản máy chủ sẽ được tự động phát hiện nếu có, nếu không, phiên bản được mặc định đặt về 14. Các trang web SharePoint không bằng tiếng Anh yêu cầu tối thiểu là phiên bản 15.
-   `Implementation` : Không bắt buộc. Hãy chỉ định phiên bản trình kết nối SharePoint sẽ sử dụng. Giá trị phù hợp là "2.0" hoặc null. Nếu giá trị là "2.0", trình kết nối SharePoint 2.0 sẽ được triển khai. Trong trường hợp giá trị là null, trình kết nối SharePoint ban đầu sẽ được triển khai.



## Category
Accessing data

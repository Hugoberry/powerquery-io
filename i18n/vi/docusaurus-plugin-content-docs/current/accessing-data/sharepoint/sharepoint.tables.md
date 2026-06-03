---
title: SharePoint.Tables
---

# SharePoint.Tables


Trả về một bảng chứa nội dung từ Danh sách SharePoint.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Remarks

Trả về một bảng có chứa hàng cho từng mục Danh sách tìm thấy trong danh sách SharePoint được chỉ định, `url`. Mỗi hàng có chứa các thuộc tính của Danh sách. Có thể chỉ định `options` để kiểm soát các tùy chọn sau:

-   `ApiVersion` : Một số (14 hoặc 15) hoặc văn bản "Auto" giúp chỉ định phiên bản API SharePoint cần sử dụng cho trang web này. Khi không được chỉ định, API phiên bản 14 sẽ được sử dụng. Khi Auto được chỉ định, phiên bản máy chủ sẽ được tự động phát hiện nếu có, nếu không, phiên bản được mặc định đặt về 14. Các trang web SharePoint không bằng tiếng Anh yêu cầu tối thiểu là phiên bản 15.
-   `Implementation` : Không bắt buộc. Hãy chỉ định phiên bản trình kết nối SharePoint sẽ sử dụng. Giá trị phù hợp là "2.0" hoặc null. Nếu giá trị là "2.0", trình kết nối SharePoint 2.0 sẽ được triển khai. Trong trường hợp giá trị là null, trình kết nối SharePoint ban đầu sẽ được triển khai.
-   `ViewMode` : Không bắt buộc. Tùy chọn này chỉ hợp lệ với quy trình triển khai trình kết nối SharePoint 2.0. Giá trị phù hợp là "All" và "Default". Nếu bạn không chỉ định, giá trị sẽ được đặt thành "All". Khi bạn chỉ định "All", chế độ xem sẽ bao gồm tất cả các cột do người dùng tạo và cột do hệ thống xác định. Nếu bạn chỉ định "Default", chế độ xem sẽ khớp nội dung người dùng nhìn thấy khi xem danh sách trực tuyến ở mọi chế độ xem mà người dùng đặt làm Mặc định trong phần cài đặt. Nếu người dùng chỉnh sửa chế độ xem mặc định để thêm/xóa cột do người dùng tạo hoặc cột do hệ thống xác định hay tạo chế độ xem mới và đặt chế độ xem đó làm mặc định, những thay đổi này sẽ áp dụng cho trình kết nối.
-   `DisableAppendNoteColumns` : Ngăn trình kết nối sử dụng điểm cuối riêng biệt cho các cột ghi chú.



## Category
Accessing data

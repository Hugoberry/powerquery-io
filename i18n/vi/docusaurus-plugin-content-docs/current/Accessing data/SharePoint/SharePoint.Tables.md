---
title: SharePoint.Tables
---

# SharePoint.Tables


## Description

Trả về một bảng chứa nội dung từ Danh sách SharePoint.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Details

Trả về một bảng có chứa hàng cho từng mục Danh sách tìm thấy trong danh sách SharePoint được chỉ định, <code>url</code>. Mỗi hàng có chứa các thuộc tính của Danh sách. Có thể chỉ định <code>options</code> để kiểm soát các tùy chọn sau:    <ul><li><code>ApiVersion</code> : Một số (14 hoặc 15) hoặc văn bản &quot;Auto&quot; gi&#250;p chỉ định phi&#234;n bản API SharePoint cần sử dụng cho trang web n&#224;y. Khi kh&#244;ng được chỉ định, API phi&#234;n bản 14 sẽ được sử dụng. Khi Auto được chỉ định, phi&#234;n bản m&#225;y chủ sẽ được tự động ph&#225;t hiện nếu c&#243;, nếu kh&#244;ng, phi&#234;n bản được mặc định đặt về 14. C&#225;c trang web SharePoint kh&#244;ng bằng tiếng Anh y&#234;u cầu tối thiểu l&#224; phi&#234;n bản 15.</li><li><code>Implementation</code> : Kh&#244;ng bắt buộc. H&#227;y chỉ định phi&#234;n bản tr&#236;nh kết nối SharePoint sẽ sử dụng. Gi&#225; trị ph&#249; hợp l&#224; &quot;2.0&quot; hoặc null. Nếu gi&#225; trị l&#224; &quot;2.0&quot;, tr&#236;nh kết nối SharePoint 2.0 sẽ được triển khai. Trong trường hợp gi&#225; trị l&#224; null, tr&#236;nh kết nối SharePoint ban đầu sẽ được triển khai.</li><li><code>ViewMode</code> : Kh&#244;ng bắt buộc. T&#249;y chọn n&#224;y chỉ hợp lệ với quy tr&#236;nh triển khai tr&#236;nh kết nối SharePoint 2.0. Gi&#225; trị ph&#249; hợp l&#224; &quot;All&quot; v&#224; &quot;Default&quot;. Nếu bạn kh&#244;ng chỉ định, gi&#225; trị sẽ được đặt th&#224;nh &quot;All&quot;. Khi bạn chỉ định &quot;All&quot;, chế độ xem sẽ bao gồm tất cả c&#225;c cột do người d&#249;ng tạo v&#224; cột do hệ thống x&#225;c định. Nếu bạn chỉ định &quot;Default&quot;, chế độ xem sẽ khớp nội dung người d&#249;ng nh&#236;n thấy khi xem danh s&#225;ch trực tuyến ở mọi chế độ xem m&#224; người d&#249;ng đặt l&#224;m Mặc định trong phần c&#224;i đặt. Nếu người d&#249;ng chỉnh sửa chế độ xem mặc định để th&#234;m/x&#243;a cột do người d&#249;ng tạo hoặc cột do hệ thống x&#225;c định hay tạo chế độ xem mới v&#224; đặt chế độ xem đ&#243; l&#224;m mặc định, những thay đổi n&#224;y sẽ &#225;p dụng cho tr&#236;nh kết nối.</li><li><code>DisableAppendNoteColumns</code> : Ngăn tr&#236;nh kết nối sử dụng điểm cuối ri&#234;ng biệt cho c&#225;c cột ghi ch&#250;.</li></ul>    



## Category
Accessing data

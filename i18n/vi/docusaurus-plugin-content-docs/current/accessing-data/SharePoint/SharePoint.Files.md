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

Trả về một bảng có chứa hàng cho mỗi tài liệu được tìm thấy trên trang web SharePoint được chỉ định, <code>url</code> và các thư mục con. Mỗi hàng có chứa các thuộc tính của thư mục hoặc tệp và liên kết đến nội dung của thư mục hoặc tệp đó. Có thể chỉ định <code>options</code> để kiểm soát các tùy chọn sau:    <ul><li><code>ApiVersion</code> : Một số (14 hoặc 15) hoặc văn bản &quot;Auto&quot; gi&#250;p chỉ định phi&#234;n bản API SharePoint cần sử dụng cho trang web n&#224;y. Khi kh&#244;ng được chỉ định, API phi&#234;n bản 14 sẽ được sử dụng. Khi Auto được chỉ định, phi&#234;n bản m&#225;y chủ sẽ được tự động ph&#225;t hiện nếu c&#243;, nếu kh&#244;ng, phi&#234;n bản được mặc định đặt về 14. C&#225;c trang web SharePoint kh&#244;ng bằng tiếng Anh y&#234;u cầu tối thiểu l&#224; phi&#234;n bản 15.</li></ul>    



## Category
Accessing data

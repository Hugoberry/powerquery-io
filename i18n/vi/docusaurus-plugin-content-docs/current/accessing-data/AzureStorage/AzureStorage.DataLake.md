---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


Trả về bảng điều hướng chứa các tài liệu tìm thấy trong vùng chứa được chỉ định và những thư mục con của vùng chứa đó trên Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Remarks

Trả về một bảng có thể điều hướng chứa các tài liệu tìm được tại bộ chứa được chỉ định và các thư mục con của bộ chứa tại URL tài khoản, <code>endpoint</code>, từ hệ thống tệp Azure Data Lake Storage. <code>options</code> có thể được chỉ định để kiểm soát các tùy chọn sau:    <ul><li><code>BlockSize</code> : Số byte cần đọc trước khi chờ mức sử dụng dữ liệu. Gi&#225; trị mặc định l&#224; 4 MB.</li><li><code>RequestSize</code> : Số byte cần c&#244;́ gắng đọc trong m&#244;̣t y&#234;u c&#226;̀u HTTP đ&#234;́n máy chủ. Giá trị mặc định là 4 MB.</li><li><code>ConcurrentRequests</code> : Tùy chọn ConcurrentRequests h&#244;̃ trợ tải xu&#244;́ng dữ li&#234;̣u nhanh hơn bằng cách chỉ định s&#244;́ lượng y&#234;u c&#226;̀u c&#226;̀n thực hi&#234;̣n song song, với chi phí sử dụng b&#244;̣ nhớ. B&#244;̣ nhớ được y&#234;u c&#226;̀u là (ConcurrentRequest \* RequestSize). Giá trị mặc định là 16.</li><li><code>HierarchicalNavigation</code> : L&#244;-gic (true/false) ki&#234;̉m soát li&#234;̣u các t&#234;̣p được trả v&#234;̀ ở dạng xem thư mục c&#226;y hay danh sách phẳng. Gi&#225; trị mặc định l&#224; false.</li></ul>



## Category
Accessing data

---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


Trả về nội dung của đối tượng nhị phân được chỉ định từ tín liệu bộ nhớ Azure.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Trả về nội dung của blob tại URL, <code>url</code>, từ tín hiệu bộ nhớ Azure. <code>options</code> có thể được chỉ định để kiểm soát các tùy chọn sau:    <ul><li><code>BlockSize</code> : Số byte cần đọc trước khi chờ mức sử dụng dữ liệu. Gi&#225; trị mặc định l&#224; 4 MB.</li><li><code>RequestSize</code> : Số byte cần c&#244;́ gắng đọc trong m&#244;̣t y&#234;u c&#226;̀u HTTP đ&#234;́n máy chủ. Giá trị mặc định là 4 MB.</li><li><code>ConcurrentRequests</code> : Tùy chọn ConcurrentRequests h&#244;̃ trợ tải xu&#244;́ng dữ li&#234;̣u nhanh hơn bằng cách chỉ định s&#244;́ lượng y&#234;u c&#226;̀u c&#226;̀n thực hi&#234;̣n song song, với chi phí sử dụng b&#244;̣ nhớ. B&#244;̣ nhớ được y&#234;u c&#226;̀u là (ConcurrentRequest \* RequestSize). Giá trị mặc định là 16.</li></ul>



## Category
Accessing data
